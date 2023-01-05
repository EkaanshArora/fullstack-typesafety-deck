import styles from "./index.module.css";
import { type NextPage } from "next";
import Head from "next/head";
import { trpc } from "../utils/trpc";
import { PropsWithChildren, useState } from "react";
import { Example } from "@prisma/client";

const Home: NextPage = () => {
  const getData = trpc.example.getAll.useQuery();

  return (
    <Layout>
      <div style={{ display: "flex", flexDirection: "column", margin: "auto", width: "100%" }}>
        {getData.data
          ? getData.data.map((e) => <Item data={e} />)
          : "Loading tRPC query..."}
      </div>
      <Buttons />
    </Layout>
  );
};

const Item = (props: { data: Example }) => {
  const { data } = props;

  return (
    <div style={{ display: "flex", flexDirection: "row", justifyContent: "space-evenly", flex: 1 }}>
      <p>{data.id}</p>
      <p>{data.message}</p>
      <p>{data.createdAt.toDateString()}</p>
    </div>
  );
};

const Buttons = () => {
  const [input, setInput] = useState("");
  const get = trpc.example.getAll.useQuery();
  const create = trpc.example.create.useMutation();
  const remove = trpc.example.deleteAll.useMutation();

  return (
    <div>
      <input value={input} onChange={(e) => setInput(e.target.value)} />
      <button onClick={async () => {
          await create.mutateAsync({ text: input })
          setInput('')
          get.refetch()
        }} disabled={!input}>
        create
      </button>
      <button onClick={async () => {
        await remove.mutateAsync()
        get.refetch()
      }}>
        delete
      </button>
    </div>
  );
}

const Layout: React.FC<PropsWithChildren> = (props) => {
  return (
    <>
      <Head>
        <title>Demo</title>
      </Head>
      <main className={styles.main}>{props.children}</main>
    </>
  );
};

export default Home;