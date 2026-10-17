import { MsEdgeTTS, OUTPUT_FORMAT } from "msedge-tts";
import { mkdirSync, renameSync } from "node:fs";

const VOICE = "ru-RU-DmitryNeural";
const SCENES = {
  hook: "Что такое Docker? Объясняю коротко и на пальцах.",
  problem: "Знакомо? На твоём ноутбуке всё работает. А на сервере другие версии Node и базы данных — и приложение падает.",
  pack: "Docker решает это так: упаковывает приложение вместе со всем, что ему нужно, — кодом, библиотеками и настройками — в контейнер.",
  flow: "Сначала пишешь Dockerfile — это рецепт. По нему собирается образ — готовый шаблон. А из образа запускаешь сколько угодно одинаковых контейнеров.",
  vsvm: "Почему не виртуальная машина? Ей нужна своя операционная система: это гигабайты и минуты на запуск. Контейнеры делят ядро системы, весят мегабайты и стартуют за секунды.",
  outro: "Собрал один раз — запускается где угодно. Это и есть Docker.",
};

mkdirSync("public/vo", { recursive: true });
for (const [id, text] of Object.entries(SCENES)) {
  const tts = new MsEdgeTTS();
  await tts.setMetadata(VOICE, OUTPUT_FORMAT.AUDIO_24KHZ_96KBITRATE_MONO_MP3);
  mkdirSync(`public/vo/tmp-${id}`, { recursive: true });
  const { audioFilePath } = await tts.toFile(`public/vo/tmp-${id}`, text, { rate: "+8%" });
  renameSync(audioFilePath, `public/vo/${id}.mp3`);
  console.log(id);
}
process.exit(0);
