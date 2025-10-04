import { test, expect } from "../utils/fixtures.js";
import { SuscribirsePage } from "../pages/SuscribirsePage.js";
import { LoginPage } from "../pages/LoginPage.js";

test("Suscribirme y verificar en Biblioteca", async ({ loginFixture }) => {
  const suscribirsePage = new SuscribirsePage(loginFixture);
  const nombreComic = await suscribirsePage.gotoSuscribirse();
  console.log("Comic suscrito:", nombreComic);
  await suscribirsePage.irABiblioteca();
  const comicEnBiblioteca = await suscribirsePage.buscarComicEnBiblioteca(nombreComic);
  expect(comicEnBiblioteca).not.toBeNull();
});
