//msw 모듈에서 제공하는 setupWorker()함수를 사용해서 서비스 워커 생성
//서비스 워커를 시작하기 위한 설정 파일의 경로

import { setupWorker } from "msw/browser";
import handlers from "./handlers";

export const worker = setupWorker(...handlers);
