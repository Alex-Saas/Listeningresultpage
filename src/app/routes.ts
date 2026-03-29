import { createBrowserRouter } from "react-router";
import { WritingTestResultPage } from "./pages/WritingTestResultPage";
import { ListeningTestResultPage } from "./pages/ListeningTestResultPage";

export const router = createBrowserRouter([
  {
    path: "/",
    Component: ListeningTestResultPage,
  },
  {
    path: "/writing",
    Component: WritingTestResultPage,
  },
]);
