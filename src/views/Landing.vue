<template>
    <div>

        <div class="position-relative">
            <!-- shape Hero -->
            <section class="section-shaped my-0">
                <div class="shape shape-style-3 shape-default shape-skew">

                </div>
                <div class="container shape-container d-flex">
                    <div class="col px-0">
                        <div class="row">
                            <div class="col-lg-6">
                                <h1 class="display-3  text-white">socialSkills
                                </h1>
                                <p class="lead  text-white">socialSkills hilft Organisationen, Personen zu finden, welche sich mit ihrer Zeit und Know-How ehrenamtlich engagieren möchten.</p>
                                <div class="btn-wrapper">
                                    <base-button tag="a"
                                                 href=""
                                                 class="mb-3 mb-sm-0"
                                                 type="info"
                                                 icon="fa fa-rocket">
                                        jetzt starten
                                    </base-button>
                                    <base-button tag="a"
                                                 href=""
                                                 class="mb-3 mb-sm-0"
                                                 type="white"
                                                 icon="fa fa-info">
                                        mehr Infos
                                    </base-button>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
            <!-- 1st Hero Variation -->
        </div>
        <section class="section section-lg pt-lg-0 mt--200">
            <div class="container">
                <div class="row justify-content-center">
                    <div class="col-lg-12">
                        <div class="row row-grid">
                            <div class="col-lg-4">
                                <card class="border-0" hover shadow body-classes="py-5">
                                    <icon name="fa fa-dollar" type="primary" rounded class="mb-4">
                                    </icon>
                                    <h6 class="text-primary text-uppercase">Kostenlos</h6>
                                    <p class="description mt-3">Die Registrierung und Vermittlung bei socialSKILLS sind zu 100% kostenfrei.</p>
                                    <base-button tag="a" href="#" type="primary" class="mt-4">
                                        Erfahre mehr
                                    </base-button>
                                </card>
                            </div>
                            <div class="col-lg-4">
                                <card class="border-0" hover shadow body-classes="py-5">
                                    <icon name="fa fa-compress" type="warning" rounded class="mb-4">
                                    </icon>
                                    <h6 class="text-warning text-uppercase">Matching</h6>
                                    <p class="description mt-3">Über unsere Webseite werden dir als Helfer automatisch Vorschläge für Projekte gemacht. Immer passend zu deinen Präferenzen und Möglichkeiten!</p>
                                    <base-button tag="a" href="#" type="warning" class="mt-4">
                                        Erfahre mehr
                                    </base-button>
                                </card>
                            </div>
                            <div class="col-lg-4">
                                <card class="border-0" hover shadow body-classes="py-5">
                                    <icon name="fa fa-child" type="success" rounded class="mb-4">
                                    </icon>
                                    <h6 class="text-success text-uppercase">Unkompliziert</h6>
                                    <p class="description mt-3">In weniger als einer Minute bist du registriert und kannst aus einer Liste mit ehrenamtlichen Organisationen und Helfern den für dich richtigen Match finden.</p>
                                    <base-button tag="a" href="#" type="success" class="mt-4">
                                        Erfahre mehr
                                    </base-button>
                                </card>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
        <section class="section bg-secondary">
            <div class="container">
                <div class="row row-grid align-items-center">
                    <div class="col-md-6">
                        <div class="card bg-default shadow border-0">
                            <img v-lazy="'img/theme/angestöpselt.jpg'" class="card-img-top">
                            <blockquote class="card-blockquote">
                                <svg preserveAspectRatio="none" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 583 95"
                                     class="svg-bg">
                                    <polygon points="0,52 583,95 0,95" class="fill-default"></polygon>
                                    <polygon points="0,42 583,95 683,0 0,95" opacity=".2" class="fill-default"></polygon>
                                </svg>
                                <h4 class="display-3 font-weight-bold text-white">Angestöpselt e.V.</h4>
                                <p class="lead text-italic text-white">Angestöpselt verschenkt Computer an Menschen, die sich keine Computer leisten können und ermöglicht so den Zugang zur digitalen Welt.</p>
                            </blockquote>
                        </div>
                    </div>
                    <div class="col-md-6">
                        <div class="pl-md-5">
                            <icon name="fa fa-trophy" class="mb-5" size="lg" type="warning" shadow rounded></icon>

                            <h3>Wie angestöpselt durch socialSkills profitiert</h3>
                            <p class="lead">Durch die Vermittlung von Ehrenamtlichen Helfern durch socialSkills konnte noch mehr Menschen der Zugang zur digitalen Welt ermöglicht werden.</p>
                            <p>Angestöpselt nutzt socialSkills um mehr ehrenamtliche Helfer auf das Projekt aufmerksam zu machen. Mit der socialSkills Plattform können einfach Events erstellt und geteilt werden, dadurch werden auch Menschen erreicht, die noch keinem festen Ehrenamt nachgehen.</p>
                            <a href="#" class="font-weight-bold text-warning mt-5">Registriere noch heute deine Initiative auf socialSkills</a>
                        </div>
                    </div>
                </div>
            </div>
        </section>
        <section class="section section section-shaped my-0 overflow-hidden">
            <div class="container py-0">
                <div class="row row-grid align-items-center">
                  <div class="col-lg-6">
                      <div class="d-flex px-3">
                          <div>
                              <icon name="fa fa-building" size="lg" class="bg-gradient-white" color="primary" shadow
                                    rounded></icon>
                          </div>
                          <div class="pl-4">
                              <h4 class="display-3">Jetzt Aufgaben übernehmen</h4>
                              <p></p>
                          </div>
                      </div>
                      <card shadow class="shadow-lg--hover mt-5">
                          <div class="d-flex px-3">
                              <div>
                                  <icon name="fa fa-building" gradient="warning" color="white" shadow
                                        rounded></icon>
                              </div>
                              <div class="pl-4">
                                  <h5 class="title text-warning">Mitarbeit bei der Tafel</h5>
                                  <p>The Arctic Ocean freezes every winter and much of the sea-ice then thaws
                                      every summer, and that process will continue whatever happens.</p>
                                  <a href="#" class="text-warning">Jetzt Aufgabe übernehmen</a>
                              </div>
                          </div>
                      </card>
                      <card shadow class="shadow-lg--hover mt-5">
                          <div class="d-flex px-3">
                              <div>
                                  <icon name="fa fa-building" gradient="success" color="white" shadow
                                        rounded></icon>
                              </div>
                              <div class="pl-4">
                                  <h5 class="title text-success">wöchentliche ehrenamtliche Mitarbeit bei Angestöpselt</h5>
                                  <p>The Arctic Ocean freezes every winter and much of the sea-ice then thaws
                                      every summer, and that process will continue whatever happens.</p>
                                  <a href="#" class="text-success">Jetzt Aufgabe übernehmen</a>
                              </div>
                          </div>
                      </card>
                  </div>
                    <div class="col-lg-6 order-lg-1">
                        <card shadow class="shadow-lg--hover mt-5">
                            <div class="d-flex px-3">
                                <div>
                                    <icon name="fa fa-building" gradient="success" color="white" shadow
                                          rounded></icon>
                                </div>
                                <div class="pl-4">
                                    <h5 class="title text-success">Jetzt Aufgaben übernehmen</h5>
                                    <p>The Arctic Ocean freezes every winter and much of the sea-ice then thaws
                                        every summer, and that process will continue whatever happens.</p>
                                    <a href="#" class="text-success">Jetzt Aufgabe übernehmen</a>
                                </div>
                            </div>
                        </card>
                        <card shadow class="shadow-lg--hover mt-5">
                            <div class="d-flex px-3">
                                <div>
                                    <icon name="fa fa-building" gradient="warning" color="white" shadow
                                          rounded></icon>
                                </div>
                                <div class="pl-4">
                                    <h5 class="title text-warning">Jetzt Aufgabe übernehmen</h5>
                                    <p>The Arctic Ocean freezes every winter and much of the sea-ice then thaws
                                        every summer, and that process will continue whatever happens.</p>
                                    <a href="#" class="text-warning">Jetzt Aufgabe übernehmen</a>
                                </div>
                            </div>
                        </card>
                    </div>
                </div>
            </div>
        </section>
        <section class="section section-shaped my-0 overflow-hidden">
            <div class="shape shape-style-3 bg-gradient-default shape-skew">
                <span></span>
                <span></span>
                <span></span>
                <span></span>
            </div>
            <div class="container pt-lg pb-300">
                <div class="row text-center justify-content-center">
                    <div class="col-lg-10">
                        <h2 class="display-3 text-white">socialSkills</h2>
                        <p class="lead text-white">Ehrenamtliche Organisationen helfen sowohl uns, als auch den Menschen um uns herum Tag für Tag ihre Probleme zu überwinden und Ziele zu erreichen. Als socialSKILLS erleichtern wir es diesen Organisationen, Personen zu finden, welche sich mit ihrer Zeit und Know-How ehrenamtlich engagieren wollen.</p>
                    </div>
                </div>
                <div class="row row-grid mt-5">
                    <div class="col-lg-4">
                        <icon name="fa fa-users" size="lg" gradient="white" shadow round color="primary"></icon>
                        <h5 class="text-white mt-3">Menschen verbinden</h5>
                        <p class="text-white mt-3">Der Kerngedanke hinter socialSKILLS ist es, Zeit und Know-How der Menschen mit ehrenamtlichen Organisationen zu verbinden.</p>
                    </div>
                    <div class="col-lg-4">
                        <icon name="ni ni-ruler-pencil" size="lg" gradient="white" shadow round color="primary"></icon>
                        <h5 class="text-white mt-3">Potenziale nutzen</h5>
                        <p class="text-white mt-3">Jeder hat seine ganz individuellen Stärken. Auf socialSKILLS wird jedes Potenzial geschätzt und bestmöglich an Organisationen vermittelt.</p>
                    </div>
                    <div class="col-lg-4">
                        <icon name="fa fa-search" size="lg" gradient="white" shadow round color="primary"></icon>
                        <h5 class="text-white mt-3">Transparenz</h5>
                        <p class="text-white mt-3">Jedes Projekt kann öffentlich eingesehen werden, um ein Maximum an Transparenz zu ermöglichen. Von der Idee bis zur Fertigstellung wird der Status kontinuierlich aktualisiert.</p>
                    </div>
                </div>
            </div>
        </section>
        <section class="section section-lg pt-lg-0 section-contact-us">
            <div class="container">
                <div class="row justify-content-center mt--300">
                    <div class="col-lg-8">
                        <card gradient="secondary" shadow body-classes="p-lg-5">
                            <h4 class="mb-1">Want to work with us?</h4>
                            <p class="mt-0">Your project is very important to us.</p>
                            <base-input class="mt-5"
                                        alternative
                                        placeholder="Your name"
                                        addon-left-icon="ni ni-user-run">
                            </base-input>
                            <base-input alternative
                                        placeholder="Email address"
                                        addon-left-icon="ni ni-email-83">
                            </base-input>
                            <base-input class="mb-4">
                                    <textarea class="form-control form-control-alternative" name="name" rows="4"
                                              cols="80" placeholder="Type a message..."></textarea>
                            </base-input>
                            <base-button type="default" round block size="lg">
                                Send Message
                            </base-button>
                        </card>
                    </div>
                </div>
            </div>
        </section>

    </div>
</template>

<script>
import firebase from 'firebase';
export default {
    data () {
    return {
    }
    },
  methods: {
    logout: function() {
      console.log("knopf");
      firebase.auth().signOut().then(() => {
        this.$router.replace('login')
      })
    }
  }
};
</script>
