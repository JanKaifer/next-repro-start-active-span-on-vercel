import { NextApiRequest, NextApiResponse } from "next";
import { getTracer } from "next/dist/server/lib/trace/tracer";
import { NextServerSpan } from "next/dist/server/lib/trace/constants";
import { trace } from "@opentelemetry/api";

const sleep = (ms: number) => new Promise((resolve) => setTimeout(resolve, ms));

export default async (req: NextApiRequest, res: NextApiResponse) => {
  await getTracer().trace(NextServerSpan.getRequestHandler, async (span) =>
    sleep(1000)
  );

  const span = trace.getTracer("default").startSpan("test");
  await sleep(1000);
  span.end();

  res.status(200).send("Hello World");
};
