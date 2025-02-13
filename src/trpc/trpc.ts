import { initTRPC } from "@trpc/server";
/**
 * Initialization of tRPC backend
 * should be done only once per backend!
 */

const t= initTRPC.create( );

/**
 * Export reusable router and procedure helpers
 * that can be used throughout the router
 */

export const router = t.router;
export const publicProcedure = t.procedure;
