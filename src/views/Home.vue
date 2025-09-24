<template>
  <section class="section">
    <div class="grid">
      <div class="col-12">

        <!-- Titolo fuori dalla card -->
        <h1 class="page-title">
          Ciao, sono <span class="accent-2">Alessandro</span>.
        </h1>
        <h2 class="page-subtitle"><span class="accent-2">Benvenuto </span>nel mio portfolio!</h2>

        <!-- Card con intro + blocco Micro-curriculum -->
        <div class="hero">
          <p class="hero__lede muted">
            Laureando in Informatica. Mi piace costruire prodotti semplici, puliti e affidabili.
            In questo portfolio trovi una breve descrizione di me, i miei progetti principali,
            i linguaggi che conosco e come contattarmi.
          </p>

          <!-- Curriculum sempre visibile -->
          <div id="cvCollapse" class="cv mt-3">
            <div class="cv__header">Micro-curriculum</div>

            <div class="accordion accordion-flush cv__accordion" id="cvAccordion">
              
              <!-- Formazione -->
              <div class="accordion-item">
                <h2 class="accordion-header" id="headingOne">
                  <button
                    class="accordion-button collapsed"
                    type="button"
                    data-bs-toggle="collapse"
                    data-bs-target="#cvFormazione"
                    aria-expanded="false"
                    aria-controls="cvFormazione"
                  >
                    Formazione
                  </button>
                </h2>
                <div
                  id="cvFormazione"
                  class="accordion-collapse collapse"
                  aria-labelledby="headingOne"
                  data-bs-parent="#cvAccordion"
                >
                  <div class="accordion-body">
                    <ul class="cv__list">
                      <li>
                        <strong>Diploma di Istruzione Superiore</strong>
                        <ul class="cv__sublist">
                          <li>Presso: Istituto Tecnico Economico R. Serra, Cesena</li>
                          <li>Corso: Sistemi Informativi Aziendali</li>
                          <li>Voto: 75/100</li>
                        </ul>
                      </li>
                      <li>
                        <strong>Laurea Triennale in Informatica</strong>
                        <ul class="cv__sublist">
                          <li>Presso: Università di Bologna – Campus di Cesena</li>
                          <li>Corso di Laurea: Tecnologie dei Sistemi Informatici</li>
                          <li>Expected Graduation: Nov. 2025</li>
                        </ul>
                      </li>
                      <li>
                        <strong>Esami / Aree principali</strong>
                        <ul class="cv__sublist">
                          <li>Sicurezza Informatica e Crittografia (4.0 GPA - 29/30L)</li>
                          <li>Ingegneria e Sviluppo Web (4.0 GPA - 27/30L)</li>
                          <li>Programmazione in C (4.0 GPA - 29/30L)</li>
                          <li>Basi di Dati</li>
                          <li>Reti</li>
                          <li>Ingegneria del Software</li>
                          <li>Algoritmi</li>
                        </ul>
                      </li>
                    </ul>
                  </div>
                </div>
              </div>

              <!-- Esperienze -->
              <div class="accordion-item">
                <h2 class="accordion-header" id="headingTwo">
                  <button
                    class="accordion-button collapsed"
                    type="button"
                    data-bs-toggle="collapse"
                    data-bs-target="#cvEsperienze"
                    aria-expanded="false"
                    aria-controls="cvEsperienze"
                  >
                    Esperienze
                  </button>
                </h2>
                <div
                  id="cvEsperienze"
                  class="accordion-collapse collapse"
                  aria-labelledby="headingTwo"
                  data-bs-parent="#cvAccordion"
                >
                  <div class="accordion-body">
                    <ul class="cv__list">
                      <li><strong>Internship</strong></li>
                      <ul class="cv__sublist">
                        <li>Presso: Cyberloop S.R.L., Cesena FC</li>
                        <li>Durata: 7 mesi (18/03/2025 - 13/10/2025)</li>
                        <li>Argomenti trattati:</li>
                        <ul class="cv__sublist2">
                          <li>
                            Blue Teaming: Provisioning automatico di ambienti AD on-premise e messa in sicurezza tramite hardening
                            <div class="cv__tags">
                              <span class="tag">Ansible</span>
                              <span class="tag">Vagrant</span>
                              <span class="tag">BadBlood</span>
                              <span class="tag">Windows Defender</span>
                              <span class="tag">PowerShell</span>
                              <span class="tag">SSH</span>
                              <span class="tag">Linux</span>
                              <span class="tag">Ubuntu</span>
                            </div>
                          </li>
                          <li>
                            Red Teaming: Automazione del Deploy e Integrazione di Strumenti di Sicurezza in Infrastrutture di Red Teaming
                            <div class="cv__tags">
                              <span class="tag">PwnDoc</span>
                              <span class="tag">PCF</span>
                              <span class="tag">MageAI</span>
                              <span class="tag">OpenVAS</span>
                              <span class="tag">Docker</span>
                              <span class="tag">Docker Compose</span>
                              <span class="tag">PowerShell</span>
                              <span class="tag">SSH</span>
                              <span class="tag">Linux</span>
                              <span class="tag">Ubuntu</span>
                            </div>
                          </li>
                        </ul>
                      </ul>
                    </ul>
                  </div>
                </div>
              </div>

            </div> <!-- /accordion -->
          </div> <!-- /cv -->
        </div> <!-- /hero -->

      </div>
    </div>
  </section>
</template>

<script setup>
import '../assets/home.css'
</script>
