
    $(function () {
        let o = {
                farmacia: {
                    nome: "Farm\xe1cias",
                    clientes: [
                        { nome: "Tave", logo: "./assets/images/logos/farmacia/Tave_Logo.webp", imagemPrincipal: "./assets/images/banners6/ave.webp" },
                        { nome: "Biopharmus", logo: "./assets/images/logos/farmacia/Biopharmus_Logo.webp", imagemPrincipal: "./assets/images/banners6/bio.webp" },
                        { nome: "Multipharma", logo: "./assets/images/logos/farmacia/Multipharma_Logo.webp", imagemPrincipal: "./assets/images/banners6/Multipharma.webp" },
                        { nome: "Vitality", logo: "./assets/images/logos/farmacia/Vitality_Logo.webp", imagemPrincipal: "./assets/images/banners6/Vitality.webp" },
                    ],
                },
                alimentacao: {
                    nome: "Alimenta\xe7\xe3o",
                    clientes: [
                        { nome: "Villa Nobre", logo: "./assets/images/logos/alimentacao/VillaNobre_Logo.webp", imagemPrincipal: "./assets/images/banners6/VIllaNobre.webp" },
                        { nome: "Dedo de Mo\xe7a", logo: "./assets/images/logos/alimentacao/Dedodemoca_Logo.webp", imagemPrincipal: "./assets/images/banners6/Dedo.webp" },
                        { nome: "Genuino Bar", logo: "./assets/images/logos/alimentacao/Genuino_Logo.webp", imagemPrincipal: "./assets/images/banners6/Genuino.webp" },
                        { nome: "Vibe", logo: "./assets/images/logos/alimentacao/Vibe_Logo.webp", imagemPrincipal: "./assets/images/banners6/Vibe.webp" },
                    ],
                },
                ecommerce: {
                    nome: "E-commerce",
                    clientes: [
                        { nome: "Planet Girls", logo: "./assets/images/logos/ecommerce/Planet_Logo.webp", imagemPrincipal: "./assets/images/banners6/Planet.webp" },
                        { nome: "Animavida", logo: "./assets/images/logos/ecommerce/Anima_Logo.webp", imagemPrincipal: "./assets/images/banners6/Anima.webp" },
                        { nome: "Respect", logo: "./assets/images/logos/ecommerce/Respect_Logo.webp", imagemPrincipal: "./assets/images/banners6/Respect.webp" },
                        { nome: "Fazenda Tamandu\xe1", logo: "./assets/images/logos/ecommerce/Fazenda_Logo.webp", imagemPrincipal: "./assets/images/banners6/FazendaTamandua.webp" },
                    ],
                },
                industria: {
                    nome: "Ind\xfastria",
                    clientes: [
                        { nome: "Dellabruna", logo: "./assets/images/logos/industria/Dellabruna_Logo.webp", imagemPrincipal: "./assets/images/banners6/Dellabruna.webp" },
                        { nome: "AWG Group", logo: "./assets/images/logos/industria/Awg_Logo.webp", imagemPrincipal: "./assets/images/banners6/AWG.webp" },
                        { nome: "Germ\xe2nia", logo: "./assets/images/logos/industria/Germania_Logo.webp", imagemPrincipal: "./assets/images/banners6/Germania.webp" },
                        { nome: "IBtek", logo: "./assets/images/logos/industria/Ibtek_Logo.webp", imagemPrincipal: "./assets/images/banners6/iBTEK.webp" },
                    ],
                },
                moda: {
                    nome: "Moda",
                    clientes: [
                        { nome: "Entretons", logo: "./assets/images/logos/moda/Entretons_Logo.webp", imagemPrincipal: "./assets/images/banners6/Entretons.webp" },
                        { nome: "Roma", logo: "./assets/images/logos/moda/Roma_Logo.webp", imagemPrincipal: "./assets/images/banners6/Roma.webp" },
                        { nome: "Camila Grant", logo: "./assets/images/logos/moda/Camilagrant_Logo.webp", imagemPrincipal: "./assets/images/banners6/CamilaGrant.webp" },
                    ],
                },
                saude: {
                    nome: "Sa\xfade",
                    clientes: [
                        { nome: "Laborat\xf3rio Pasteur", logo: "./assets/images/logos/saude/Pasteur_Logo.webp", imagemPrincipal: "./assets/images/banners6/Pasteur.webp" },
                        { nome: "CML", logo: "./assets/images/logos/saude/CML_Logo.webp", imagemPrincipal: "./assets/images/banners6/CML.webp" },
                        { nome: "Clube Animal", logo: "./assets/images/logos/saude/Clubeanimal_Logo.webp", imagemPrincipal: "./assets/images/banners6/ClubeAnimal.webp" },
                        { nome: "Lifemen", logo: "./assets/images/logos/saude/Lifemen_Logo.webp", imagemPrincipal: "./assets/images/banners6/Lifeman.webp" },
                    ],
                },
                internet: {
                    nome: "Internet",
                    clientes: [
                        { nome: "Via Fibra", logo: "./assets/images/logos/internet/Viafibra_Logo.webp", imagemPrincipal: "./assets/images/banners6/ViaFibra.webp" },
                        { nome: "Interfibras", logo: "./assets/images/logos/internet/Interfibras_Logo.webp", imagemPrincipal: "./assets/images/banners6/Interfibras.webp" },
                        { nome: "Exon", logo: "./assets/images/logos/internet/Exon_Logo.webp", imagemPrincipal: "./assets/images/banners6/Exon.webp" },
                    ],
                },
                servicos: {
                    nome: "Servi\xe7os",
                    clientes: [
                        { nome: "AG Power", logo: "./assets/images/logos/servicos/Agpower_Logo.webp", imagemPrincipal: "./assets/images/banners6/AgPower.webp" },
                        { nome: "Royal", logo: "./assets/images/logos/servicos/Royal_Logo.webp", imagemPrincipal: "./assets/images/banners6/Royal.webp" },
                        { nome: "Auto Vis\xe3o", logo: "./assets/images/logos/servicos/Autovisao_Logo.webp", imagemPrincipal: "./assets/images/banners6/Autovisao.webp" },
                        { nome: "Arquitetos da Pizza", logo: "./assets/images/logos/servicos/Arquitetos_Logo.webp", imagemPrincipal: "./assets/images/banners6/ArquitetosdaPizza.webp" },
                    ],
                },
            },
            e = $("#sessao-6-container-segmentos"),
            t = $("#sessao-6-container-textos"),
            n = $("#sessao-6-container-clientes"),
            s = $("#sessao-6-imagem-principal"),
            a = $("#sessao-6-seta-segmento-prev"),
            p = $("#sessao-6-seta-segmento-next"),
            i = $("#sessao-6-segmento-peek-prev"),
            r = $("#sessao-6-segmento-peek-next"),
            c = $("#sessao-6-seta-cliente-ativo"),
            l = Object.keys(o),
            m = l.length,
            g = 0,
            u = 0,
            w = !1,
            b = 0,
            d = 0,
            h = 0,
            x = 0,
            f = !1,
            P = null,
            L = 120,
            v = window.matchMedia("(max-width: 600px)"),
            _ = v.matches;
        v.addEventListener("change", (o) => {
            (_ = o.matches), T(u);
        });
        let y = (o, e) => ((o % e) + e) % e,
            A = { r: 51, g: 51, b: 51 },
            C = { r: 249, g: 176, b: 0 },
            k = (o, e = 0, t = 1) => Math.min(t, Math.max(e, o)),
            E = (o, e, t) => o + (e - o) * t,
            G = (o) => {
                let e = Math.round(E(A.r, C.r, o)),
                    t = Math.round(E(A.g, C.g, o)),
                    n = Math.round(E(A.b, C.b, o));
                return `rgb(${e}, ${t}, ${n})`;
            };
        function V() {
            let o = t.find(".sessao-6-texto-segmento");
            if (!o.length) return;
            let e = L ? -x / L : 0,
                n = 1 + e;
            o.each((o, e) => {
                let t = k(1 - Math.pow(Math.abs(o - n), 1.35));
                e.style.color = G(t);
            });
        }
        function z(o, n = !1) {
            let s = 0.8 * o;
            if (n && L) {
                let a = 0.35 * L,
                    p = 0.08 * L,
                    c = Math.abs(s);
                c <= p ? (s = 0) : c < a && (s = Math.sign(s) * Math.pow(c / a, 1.6) * a);
            }
            e.css("transform", `translateX(${s}px)`), t.find(".sessao-6-texto-segmento").css("transform", `translateX(${s}px)`), i.css("transform", `translateX(${-L + s}px)`), r.css("transform", `translateX(${L + s}px)`), V && V();
        }
        function q() {
            for (; x <= -L; ) (x += L), T(u + 1);
            for (; x >= L; ) (x -= L), T(u - 1);
        }
        function I(o) {
            d || (d = o);
            let e = Math.max(0.001, o - d);
            if (((d = o), (x += h * e), q(), z(x, !1), 0.01 > Math.abs((h *= Math.exp(-4.5 * (e / 1e3)))) && 0.75 > Math.abs(x))) {
                (x = 0), z(0), (P = null);
                return;
            }
            P = requestAnimationFrame(I);
        }
        function M(o) {
            P && (cancelAnimationFrame(P), (P = null)),
                (w = !0),
                (f = !1),
                (b = o),
                (d = performance.now()),
                (h = 0),
                e.addClass("is-dragging"),
                e.css("transition", "none"),
                i.css("transition", "none"),
                r.css("transition", "none"),
                t.find(".sessao-6-texto-segmento").css("transition", "none"),
                V(),
                e.on("dragstart", (o) => o.preventDefault());
        }
        function R(o) {
            if (!w) return;
            let e = performance.now(),
                t = o - b,
                n = Math.max(1, e - d);
            (f = f || Math.abs(t) > 2), (x += t), q(), z(x, !0), (h = 0.75 * h + 0.25 * (t / n)), (b = o), (d = e);
        }
        function X() {
            if (!w) return;
            (w = !1), e.removeClass("is-dragging");
            let o = 0.35 * L;
            if (Math.abs(x) <= o) {
                e.css("transition", "transform .25s ease-out"),
                    i.css("transition", "transform .25s ease-out"),
                    r.css("transition", "transform .25s ease-out"),
                    t.find(".sessao-6-texto-segmento").css("transition", "transform .25s ease-out"),
                    z(0),
                    setTimeout(() => {
                        e.css("transition", ""), i.css("transition", ""), r.css("transition", ""), t.find(".sessao-6-texto-segmento").css("transition", "");
                    }, 260),
                    (x = 0);
                return;
            }
            (d = 0), (P = requestAnimationFrame(I));
        }
        function D(o) {
            if (!o || !o.length) {
                c.css("opacity", "0");
                return;
            }
            let e = o.position().top + o.outerHeight() / 2;
            c.css({ "--seta-top": `${e - c.height() / 2}px`, opacity: "1" });
        }
        function B(o) {
            if (!o) {
                s.stop(!0, !0).fadeOut(200);
                return;
            }
            let e = new Image();
            (e.onload = () => {
                s.stop(!0, !0).fadeOut(200, function () {
                    $(this).attr("src", o).fadeIn(200);
                });
            }),
                (e.src = o);
        }
        function F() {
            let o = e.find(".sessao-6-botao-segmento");
            if (o.length >= 2) {
                let n = o.eq(0)[0].offsetLeft,
                    s = o.eq(1)[0].offsetLeft;
                L = Math.max(60, s - n);
                let a = o.eq(0)[0].offsetWidth;
                i.css("--peek-width", a + "px"), r.css("--peek-width", a + "px");
            } else L = Math.max(60, e.innerWidth() / 4);
            !(function o() {
                let n = e.find(".sessao-6-botao-segmento");
                if (n.length < 2) return;
                let s = n.eq(1)[0];
                t.css({ "--destaque-left": `${s.offsetLeft}px`, "--destaque-width": `${s.offsetWidth}px` });
            })();
        }
        function T(a) {
            (u = y(a, m)), (g = y(u - 1, m)), e.empty(), t.empty();
            for (let p = 0; p < 4; p++) {
                let w = y(g + p, m),
                    b = l[w],
                    d = $('<button type="button" class="sessao-6-botao-segmento"></button>'),
                    h = $('<div class="sessao-6-texto-segmento"></div>').text(o[b].nome);
                w === u && (d.addClass("active"), h.addClass("active")), d.on("click", () => T(w)), h.on("click", () => T(w)), e.append(d), t.append(h);
            }
            let x = y(g - 1, m),
                f = y(g + 4, m);
            i.css("opacity", "1").text(o[l[x]].nome),
                r.css("opacity", "1").text(o[l[f]].nome),
                _
                    ? (s.hide(),
                      n.hide(),
                      (function e(t) {
                          let n = o[t]?.clientes || [],
                              s,
                              a = ((s = $("#s6-galeria-mobile")).length || ((s = $('<div id="s6-galeria-mobile" class="s6-galeria-mobile"></div>')), $(".sessao-6-bloco-grande").empty().append(s)), s);
                          a.empty(),
                              n.forEach((o) => {
                                  if (!o?.imagemPrincipal) return;
                                  let e = $(`
      <figure class="s6-gal-item">
        <img class="s6-gal-img" src="${o.imagemPrincipal}" alt="${o.nome || ""}" loading="lazy">
        <figcaption class="s6-gal-cap">${o.nome || ""}</figcaption>
      </figure>`);
                                  a.append(e);
                              });
                      })(l[u]))
                    : ($("#s6-galeria-mobile").remove(),
                      s.show(),
                      n.show(),
                      (function e(t) {
                          n.empty().append(c);
                          let s = o[t]?.clientes || [];
                          s.forEach((o) => {
                              if (o.imagemPrincipal) {
                                  let e = new Image();
                                  e.src = o.imagemPrincipal;
                              }
                          });
                          for (let a = 0; a < 4; a++) {
                              let p = s[a];
                              if (p) {
                                  let i = $('<button type="button" class="sessao-6-botao-cliente"></button>');
                                  p.logo ? i.append($("<img>").addClass("sessao-6-logo-cliente").attr("src", p.logo).attr("alt", `Logo ${p.nome}`)) : i.text(p.nome || "Cliente"),
                                      i.on("click", function () {
                                          $(".sessao-6-botao-cliente").removeClass("active"), $(this).addClass("active"), B(p.imagemPrincipal), D($(this));
                                      }),
                                      n.append(i);
                              } else n.append('<div class="sessao-6-botao-cliente sessao-6-cliente-vazio"></div>');
                          }
                          let r = n.find(".sessao-6-botao-cliente:not(.sessao-6-cliente-vazio)").first();
                          r.length ? r.trigger("click") : (B(""), D(null));
                      })(l[u])),
                setTimeout(() => {
                    F(), V(), z(0);
                }, 0);
        }
        e.on("mousedown", (o) => M(o.pageX)),
            $(document).on("mousemove", (o) => R(o.pageX)),
            $(document).on("mouseup", X),
            e.on("touchstart", (o) => {
                let e = o.originalEvent.touches[0];
                M(e.pageX);
            }),
            e.on("touchmove", (o) => {
                let e = o.originalEvent.touches[0];
                R(e.pageX);
            }),
            e.on("touchend touchcancel", X),
            p.on("click", () => T(u + 1)),
            a.on("click", () => T(u - 1));
        let W = new ResizeObserver(() => {
            setTimeout(F, 0);
        });
        W.observe(e[0]), T(0);
    });
