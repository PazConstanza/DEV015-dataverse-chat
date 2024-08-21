export const filterData = (data, filterBy, value) => {

    const dataFiltrada = data.filter(campeona => campeona.facts[filterBy] === value);

    return dataFiltrada;
};

export const sortData = (data, sortBy, sortOrder) => {
    const dataOrdenada = data
    if (sortOrder === "asc") {
        return dataOrdenada.sort((a, b) => {
            if (a[sortBy] > b[sortBy]) {
                return 1;
            } else if (a[sortBy] < b[sortBy]) {
                return -1;
            } else {
                return 0;
            }
        });
    } else if (sortOrder === "desc") {
        return dataOrdenada.sort((a, b) => {
            if (a[sortBy] > b[sortBy]) {
                return -1;
            } else if (a[sortBy] < b[sortBy]) {
                return 1;
            } else {
                return 0;
            }
        });
    } else {

        return dataOrdenada;
    }
};

export const computeStats = (data) => {
    const conteoDano = data.reduce((acumulador, campeona) => {
        if (acumulador[campeona.facts.tipoDeDano]) {
            acumulador[campeona.facts.tipoDeDano]++;
        } else {
            acumulador[campeona.facts.tipoDeDano] = 1;
        }
        return acumulador;
    }, {});

    const porcentajes = {};
    const total = data.length;

    for (const tipo in conteoDano) {
        porcentajes[tipo] = ((conteoDano[tipo] * 100) / total).toFixed(2);
    }

    porcentajes["Total"] = total;

    return porcentajes;
};