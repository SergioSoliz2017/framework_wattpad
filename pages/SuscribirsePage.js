import { expect } from "@playwright/test";

export class SuscribirsePage {
  constructor(page) {
    this.page = page;
    this.comic = 'a[data-testid="coverLink"]';
    this.btnAgregar = 'button[aria-label="Agregar la historia a..."]';
    this.btnListaPrivada = 'li[data-testid="library"]';
    this.btnPerfil = 'div[id="_83DhP"] button[aria-label="Profile Dropdown"]';
    this.tituloComic = 'div[class="gF-N5"]';
    this.opcionBiblioteca = 'a[href="/library"]';
    this.contenedorComic = 'div[data-testid="library-listing"]';
  }

  async gotoSuscribirse() {
    await this.page.click(this.comic);
    const nombreComic = await this.page.textContent(this.tituloComic);
    console.log("Nombre del comic:", nombreComic);
    await this.page.click(this.btnAgregar);
    await this.page.click(this.btnListaPrivada);
    return nombreComic; 
  }

  async irABiblioteca() {
    await this.page.pause()
    await this.page.click(this.btnPerfil);
    await this.page.waitForSelector(this.opcionBiblioteca, {
      state: "visible",
    });
    await this.page.click(this.opcionBiblioteca);
    await this.page.waitForSelector(this.contenedorComic, { state: "visible" });
  }

  async buscarComicEnBiblioteca(nombreComic) {
    const comics = await this.page.$$(this.contenedorComic);
    for (const comic of comics) {
      const titulo = await comic.textContent();
      if (titulo.includes(nombreComic)) {
        console.log("Comic encontrado en Biblioteca:", titulo);
        return comic; 
      }
    }
    console.log("Comic no encontrado en Biblioteca");
    return null;
  }
}
