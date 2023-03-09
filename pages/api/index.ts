import { NextApiRequest, NextApiResponse } from "next";
import { getTracer } from "next/dist/server/lib/trace/tracer";
import { NextServerSpan } from "next/dist/server/lib/trace/constants";

export default async (req: NextApiRequest, res: NextApiResponse) => {
  return await getTracer().trace(
    NextServerSpan.getRequestHandler,
    async (span) => {
      res.status(200).send("Hello World");
    }
  );
};
