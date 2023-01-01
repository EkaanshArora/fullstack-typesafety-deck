import styles from "./index.module.css";
import { type NextPage } from "next";
import Head from "next/head";
import { trpc } from "../utils/trpc";
import { PropsWithChildren, useState } from "react";
import { Example } from "@prisma/client";

const Home: NextPage = () => {
  const [text, setText] = useState("");
  const get = trpc.example.getAll.useQuery();

  return (
    <Layout>
      <div style={{ display: "flex", flexDirection: "column", margin: "auto", width: "100%" }}>
        {get.data
          ? get.data.map((e) => <Item data={e} />)
          : "Loading tRPC query..."}
      </div>
      <input value={text} onChange={(e) => setText(e.target.value)} />
      <Buttons text={text} />
    </Layout>
  );
};


const Buttons = (props: { text: string }) => {
  const get = trpc.example.getAll.useQuery();
  const create = trpc.example.create.useMutation();
  const remove = trpc.example.deleteAll.useMutation();

  const {text} = props;
  return (<div>
    <button onClick={() => create.mutateAsync({
      text
    }).then(() => {
      get.refetch();
    })} disabled={!text}>
      create
    </button>
    <button onClick={() => remove.mutateAsync().then(() => {
      get.refetch();
    })}>
      delete
    </button>
  </div>);
}

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