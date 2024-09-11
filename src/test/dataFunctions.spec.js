import { filterData, sortData } from '../lib/dataFunctions.js';
import { fakeData } from './data.js'




describe('test orden asc y des en campeonas', () => {

  it('al seleccionar asc que ordene las campeonas alfabeticamente  desde A-Z', () => {
    const ordenAsc = sortData(fakeData, "name", "asc")
    expect(ordenAsc[0].name).toBe('Ahri');
  });

  it('al seleccionar des que ordene las campeonas alfabeticamente desde Z-A', () => {
    const ordenDesc = sortData(fakeData, "name", "desc")
    expect(ordenDesc[0].name).toBe('Soraka');
  });

});

describe('al seleccionar diversas opciones de dificultad, tiene que filtrar según selección', () => {

  it('test filtro dificultad baja', () => {
    const dataFiltroDificultad = filterData(fakeData, "Dificultad", "Baja")
    expect(dataFiltroDificultad.length).toBe(8);
  });

  it('test filtro dificultad Media', () => {
    const dataFiltroDifMedia = filterData(fakeData, "Dificultad", "Media")
    expect(dataFiltroDifMedia.length).toBe(9);
  });

  it('test filtro dificultad Alta', () => {
    const dataFiltroDifAlta = filterData(fakeData, "Dificultad", "Alta")
    expect(dataFiltroDifAlta.length).toBe(7);
  });

});

describe('al seleccionar distintos tipos de daño, debe filtrar según selección', () => {

  it('test filtro Tipo de Daño Mágico', () => {
    const dataFiltroFisico = filterData(fakeData, "Daño", "Mágico")
    expect(dataFiltroFisico.length).toBe(14);
  });

  it('test filtro Tipo de Daño Físico', () => {
    const dataFiltroDifMagico = filterData(fakeData, "Daño", "Físico")
    expect(dataFiltroDifMagico.length).toBe(10);
  });

});

describe('al seleccionar el tipo de carril, debe filtrar según selección', () => {

  it('test filtro Carril Bot', () => {
    const dataFiltroBot = filterData(fakeData, "Carril", "Bot")
    expect(dataFiltroBot.length).toBe(5);
  });

  it('test filtro Carril Support', () => {
    const dataFiltroSupport = filterData(fakeData, "Carril", "Support")
    expect(dataFiltroSupport.length).toBe(5);
  });

  it('test filtro Carril Mid', () => {
    const dataFiltroMid = filterData(fakeData, "Carril", "Mid")
    expect(dataFiltroMid.length).toBe(6);
  });

  it('test filtro Carril Jungla', () => {
    const dataFiltroJungla = filterData(fakeData, "Carril", "Jungla")
    expect(dataFiltroJungla.length).toBe(4);
  });

  it('test filtro Carril Top', () => {
    const dataFiltroTop = filterData(fakeData, "Carril", "Top")
    expect(dataFiltroTop.length).toBe(4);
  });

});

