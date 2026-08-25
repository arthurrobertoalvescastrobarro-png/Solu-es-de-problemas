/* =========================================================
   CATÁLOGO DE PROJETOS
========================================================= */


/* =========================================================
   CONFIGURAÇÃO DOS PROJETOS
========================================================= */

const projetos = [

    {
        titulo: "Projeto 01",

        imagem: "https://placehold.co/800x500/1e1e1e/ffffff?text=Projeto+01",

        descricao:
            "Descrição do primeiro projeto. Aqui você poderá explicar brevemente o objetivo e as principais características.",

        link: "#"
    },
    {
        titulo: "Projeto 02",

        imagem: "https://placehold.co/800x500/1e1e1e/ffffff?text=Projeto+02",

        descricao:
            "Descrição do segundo projeto. Você poderá substituir este conteúdo pelas informações do seu projeto.",

        link: "#"
    },
    {
        titulo: "Projeto 03",

        imagem: "https://placehold.co/800x500/1e1e1e/ffffff?text=Projeto+03",

        descricao:
            "Descrição do segundo projeto. Você poderá substituir este conteúdo pelas informações do seu projeto.",

        link: "#"
    },
    {
        titulo: "Projeto 04",

        imagem: "https://placehold.co/800x500/1e1e1e/ffffff?text=Projeto+04",

        descricao:
            "Descrição do segundo projeto. Você poderá substituir este conteúdo pelas informações do seu projeto.",

        link: "#"
    },
    {
        titulo: "Projeto 05",

        imagem: "https://placehold.co/800x500/1e1e1e/ffffff?text=Projeto+05",

        descricao:
            "Descrição do segundo projeto. Você poderá substituir este conteúdo pelas informações do seu projeto.",

        link: "#"
    },
    {
        titulo: "Projeto 06",

        imagem: "https://placehold.co/800x500/1e1e1e/ffffff?text=Projeto+06",

        descricao:
            "Descrição do segundo projeto. Você poderá substituir este conteúdo pelas informações do seu projeto.",

        link: "#"
    },

];


/* =========================================================
   ELEMENTOS DO HTML
========================================================= */

const listaProjetos =
    document.getElementById("listaProjetos");

const btnTema =
    document.getElementById("btnTema");

const formAvaliacao =
    document.getElementById("formAvaliacao");


/* =========================================================
   MOSTRAR PROJETOS
========================================================= */

function mostrarProjetos() {

    if (!listaProjetos) {
        console.error(
            "Elemento #listaProjetos não foi encontrado no HTML."
        );

        return;
    }


    listaProjetos.innerHTML = "";


    if (projetos.length === 0) {

        listaProjetos.innerHTML = `
            <div class="col-12">

                <div class="alert alert-secondary text-center">
                    Nenhum projeto disponível no momento.
                </div>

            </div>
        `;

        return;
    }


    projetos.forEach((projeto) => {

        const linkValido =
            projeto.link &&
            projeto.link !== "#" &&
            projeto.link.trim() !== "";


        const botaoProjeto = linkValido

            ? `
                <a
                    href="${projeto.link}"
                    target="_blank"
                    rel="noopener noreferrer"
                    class="btn-acessar-projeto">

                    🔗 Acessar Projeto

                </a>
            `

            : `
                <div class="btn-projeto-indisponivel">

                    🔗 Link em breve

                </div>
            `;


        const card = document.createElement("div");

        card.className =
            "col-xl-4 col-lg-4 col-md-6 col-sm-12";


        card.innerHTML = `

            <article class="card-projeto">

                <!-- IMAGEM -->

                <div class="imagem-projeto-container">

                    <img
                        src="${projeto.imagem}"
                        alt="Imagem do projeto ${projeto.titulo}"
                        class="imagem-projeto"
                        loading="lazy">

                </div>


                <!-- CONTEÚDO -->

                <div class="card-projeto-body">

                    <h3 class="titulo-projeto">
                        ${projeto.titulo}
                    </h3>


                    <p class="descricao-projeto">
                        ${projeto.descricao}
                    </p>


                    ${botaoProjeto}

                </div>

            </article>

        `;


        listaProjetos.appendChild(card);

    });

}


/* =========================================================
   TEMA
========================================================= */

function alternarTema() {

    document.body.classList.toggle("tema-claro");


    const temaClaro =
        document.body.classList.contains("tema-claro");


    if (temaClaro) {

        if (btnTema) {
            btnTema.textContent = "☀️";
            btnTema.title = "Ativar tema escuro";
        }

        localStorage.setItem(
            "temaCatalogo",
            "claro"
        );

    } else {

        if (btnTema) {
            btnTema.textContent = "🌙";
            btnTema.title = "Ativar tema claro";
        }

        localStorage.setItem(
            "temaCatalogo",
            "escuro"
        );

    }

}


/* =========================================================
   CARREGAR TEMA SALVO
========================================================= */

function carregarTema() {

    const temaSalvo =
        localStorage.getItem("temaCatalogo");


    if (temaSalvo === "claro") {

        document.body.classList.add(
            "tema-claro"
        );


        if (btnTema) {
            btnTema.textContent = "☀️";
            btnTema.title = "Ativar tema escuro";
        }

    } else {

        document.body.classList.remove(
            "tema-claro"
        );


        if (btnTema) {
            btnTema.textContent = "🌙";
            btnTema.title = "Ativar tema claro";
        }

    }

}


/* =========================================================
   FORMULÁRIO DE AVALIAÇÃO
========================================================= */

if (formAvaliacao) {

    formAvaliacao.addEventListener(
        "submit",
        function (event) {

            event.preventDefault();


            const nome =
                document.getElementById(
                    "nomeAvaliacao"
                )?.value.trim();


            const email =
                document.getElementById(
                    "emailAvaliacao"
                )?.value.trim();


            const nota =
                document.getElementById(
                    "notaAvaliacao"
                )?.value;


            const avaliacao =
                document.getElementById(
                    "textoAvaliacao"
                )?.value.trim();


            if (
                !nome ||
                !email ||
                !nota ||
                !avaliacao
            ) {

                if (typeof Swal !== "undefined") {

                    Swal.fire({
                        icon: "warning",
                        title: "Campos obrigatórios",
                        text: "Preencha todos os campos antes de enviar."
                    });

                } else {

                    alert(
                        "Preencha todos os campos antes de enviar."
                    );

                }

                return;
            }


            /*
                =====================================================
                ENVIO DA AVALIAÇÃO

                O envio real para o e-mail será configurado
                posteriormente.

                Neste momento, os dados são apenas preparados.
                =====================================================
            */

            const dadosAvaliacao = {

                nome: nome,

                email: email,

                nota: nota,

                avaliacao: avaliacao,

                data:
                    new Date().toLocaleString(
                        "pt-BR"
                    )

            };


            console.log(
                "Avaliação recebida:",
                dadosAvaliacao
            );


            if (typeof Swal !== "undefined") {

                Swal.fire({
                    icon: "success",
                    title: "Avaliação registrada!",
                    text: "O formulário foi preenchido corretamente."
                });

            } else {

                alert(
                    "Avaliação registrada!"
                );

            }


            formAvaliacao.reset();

        }
    );

}


/* =========================================================
   INICIALIZAÇÃO
========================================================= */

document.addEventListener(
    "DOMContentLoaded",
    function () {

        carregarTema();

        mostrarProjetos();

    }
);