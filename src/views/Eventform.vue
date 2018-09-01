<template>
    <div class="profile-page">
        <section class="section-profile-cover section-shaped my-0">
            <div class="shape shape-style-1 shape-primary shape-skew alpha-4">
                <span></span>
                <span></span>
                <span></span>
                <span></span>
                <span></span>
                <span></span>
                <span></span>
            </div>
        </section>
        <section class="section section-skew">
            <div class="container">
                <card shadow class="card-profile mt--300" no-body>
                    <div class="px-4">
                        <div class="row justify-content-center">
                            <div class="col-lg-3 order-lg-2">
                                <div class="card-profile-image">
                                    <a href="#">
                                        <img v-lazy="'img/theme/team-4-800x800.jpg'" class="rounded-circle">
                                    </a>
                                </div>
                            </div>
                            <div class="col-lg-4 order-lg-3 text-lg-right align-self-lg-center">
                                <div class="card-profile-actions py-4 mt-lg-0">
                                    <base-button type="info" v-on:click="logout" size="sm" class="mr-4">Logout</base-button>
                                </div>
                            </div>
                            <div class="col-lg-4 order-lg-1">
                                <div class="card-profile-stats d-flex justify-content-center">
                                    <div>
                                        <span class="heading">22</span>
                                        <span class="description">Events</span>
                                    </div>
                                    <div>
                                        <span class="heading">10</span>
                                        <span class="description">ehrenamtliche Helfer</span>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div class="text-center mt-5">
                            <h3>Trage hier dein Event ein und teile es mit der socialSkills Community
                            </h3>
                        </div>
                        <div class="mt-5 py-5 border-top text-center">
                            <div class="row justify-content-center">
                                <div class="col-lg-9">
                                    <base-input placeholder="Projektname" addon-left-icon="fa fa-info">

                                    </base-input>
                                    <base-input placeholder="Ansprechpartner" addon-left-icon="fa fa-child">

                                    </base-input>
                                    <div class="form-group">
                                        <div class="input-group input-group-alternative">
                                            <div class="input-group-prepend">
                                                <span class="input-group-text"><i class="ni ni-calendar-grid-58"></i></span>
                                            </div>
                                            <input class="form-control datepicker" placeholder="Select date" type="text" value="06/20/2018">
                                        </div>
                                    </div>
                                    <form>
                                    <textarea class="form-control form-control-alternative" rows="3" placeholder="Beschreibung des Projekts"></textarea>
                                    <base-input placeholder="Status des Projektes" addon-left-icon="fa fa-signal">

                                    </base-input>
                                    <button class="btn btn-icon btn-3 btn-primary" type="button">
                                        <span class="btn-inner--icon"><i class="fa fa-arrow-right"></i></span>

                                        <span class="btn-inner--text">Event jetzt eintragen</span>

                                    </button>
                                    </form>
                                </div>
                            </div>
                        </div>
                    </div>
                </card>
            </div>
        </section>
    </div>
</template>
<script>
import firebase from 'firebase';
export default {
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
<style>
</style>
