Copyright 2020, Battelle Energy Alliance, LLC  ALL RIGHTS RESERVED

<template>
    <v-app>
        <v-main>
            <v-container>
                <v-spacer>
                    <br />
                    <br />
                </v-spacer>
                
                <h2>Innoslate Reports</h2>

                <v-spacer>
                    <br />
                    <br />
                </v-spacer>

                <input type="text" id="nameString" v-model="nameString" placeholder="Author(s)">
                <v-btn @click="addName"><span class="material-icons">person_add_alt</span></v-btn>
                <ul>
                    <li v-for="name in nameArray">{{ name }}</li>
                </ul>

                <v-spacer>
                    <br />
                    <br />
                </v-spacer>

                Official Use Only <input type="checkbox" id="isOUO" v-model="isOUO" />

                <v-spacer>
                    <br />
                    <br />
                </v-spacer>

                <v-btn large v-if="!this.projects.length" v-on:click="getProjects" text small color="#07519E">Get NRIC Projects</v-btn>

                <template v-if="this.projects.length">
                    <Projects v-bind:projects="projects" v-bind:nameString="nameConcat" v-bind:isOUO="isOUO"/>
                </template>
            </v-container>
        </v-main>
    </v-app>
</template>

<script>
import Projects from './components/Projects'
import {getProjects, getTemplates} from './utils/utils';

export default {
    name: "App",
    components: {
        Projects
    },
    methods: {
        getProjects: async function() {
            this.projects = await getProjects();
        },
        addName: function() {
            if (!this.nameString) {
                return;
            }
            //this.nameList += this.nameString + "|";
            this.nameArray.push(this.nameString)
            this.nameConcat = this.nameArray.join("|")
            this.nameString = '';
            //alert(this.nameList);
        }
    },
    data: function() {
        return {
            projects: [],
            templates: [],
            nameString: '',
            nameConcat: '',
            nameArray: [],
            isOUO: false
        }
    },
    mounted: function() {
        this.templates = getTemplates();
    }
}
</script>
