#!/usr/bin/env node
import archiver from "archiver";
import fs from "fs";

const execute = async () => {

  const output = fs.createWriteStream("/tmp/dist.zip");
  const archive = archiver("zip", {});

  archive.pipe(output);
  archive.glob("dist/**/*");

  await archive.finalize();
}

execute().then(() => {});
