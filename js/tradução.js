// Dicionário de palavras erradas e suas traduções
const dictionary = {
    "Drome": "Dorme",
    "Onton": "Então",
    "a refrigerante": "O refrigerante",
    "Ragabundo": "Vagabundo",
    "Organizamento": "Organização",
    "Ordi": "Ordem",
    "Abaixar": "Baixar",
    "Galfo": "Garfo",
    "Bisa": "Biz",
    "Flauda": "Fralda",
    "Truxe": "Trouxe",
    "Calvão": "Carvão",
    "Trabaia": "Trabalha",
    "Intoxicado": "Intoxicado",
    "discia": "Descia",
    "Cender": "Acender",
    "Cabeu": "Coube",
    "Incovite": "Convite",
    "Shoti": "Short",
    "Porva": "Prova",
    "Ecolomia": "Economia",
    "Estambu": "Estômago",
    "Fosfo": "Fósforo",
    "Melencia": "Melancia",
    "Cibola": "Cebola",
    "Engravado": "Encravado"
};


window.onload = function() {
    const modal = document.getElementById("modal");
    modal.style.display = "none"; // Garante que o modal esteja escondido ao carregar a página
};

// Obtém elementos do modal
const modal = document.getElementById("modal");
const modalText = document.getElementById("modal-text");
const closeModal = document.querySelector(".close");

// Adiciona evento de clique para cada ícone de tradução
document.querySelectorAll(".translate-icon").forEach(icon => {
    icon.addEventListener("click", function () {
        let wordElement = this.parentElement.querySelector(".text");
        let word = wordElement.innerText;
        let translation = dictionary[word] || "Tradução não encontrada";

        // Atualiza o texto e exibe o modal
        modalText.innerText = `Tradução: ${translation}`;
        modal.style.display = "flex";
    });
});

// Fecha o modal ao clicar no "X"
closeModal.addEventListener("click", function () {
    modal.style.display = "none";
});

// Fecha o modal ao clicar fora dele
window.addEventListener("click", function (event) {
    if (event.target === modal) {
        modal.style.display = "none";
    }
});