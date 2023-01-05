import { z } from "zod";
import { router, publicProcedure } from "../trpc";

export const exampleRouter = router({
	create: publicProcedure
		.input(z.object({ text: z.string() }))
		.mutation(async ({ input, ctx }) => {
			await ctx.prisma.example.create({
				data: {
					message: input.text,
				},
			});
			return { status: "success" };
		}),
	deleteAll: publicProcedure.mutation(async ({ ctx }) => {
		await ctx.prisma.example.deleteMany({
			where: { NOT: { message: "" } },
		});
		return { status: "success" };
	}),
	getAll: publicProcedure.query(({ ctx }) => {
		console.log(
			ctx.prisma.example.findMany({
				orderBy: { updatedAt: "desc" },
			})
		);
		return ctx.prisma.example.findMany();
	}),
});
