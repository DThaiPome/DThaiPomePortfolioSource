<template>
    <div id="description-container">
        <div class="description-panel">
            <img class="details-body-image" 
                 v-if="project.bodyImgSrcB"
                 :src="project.bodyImgSrcB" 
                 v-fix-footer-on-load />
            <template v-if="(typeof project.responsibilities !== 'undefined')">
                <h3> Accomplishments </h3>
                <common-unordered-list :items="project.responsibilities" 
                        :classes="'description-text'" />
            </template>
            <br>
            <template v-if="(typeof project.tech !== 'undefined')">
                <h3> Technology Used </h3>
                <common-unordered-list :items="project.tech" 
                        :classes="'description-text'" />
            </template>
        </div>
        <div class="description-panel">
            <h3> Summary </h3>
            <div class="description-text" v-html="project.summary" />
            <img class="details-body-image" 
                 v-if="project.bodyImgSrcA"
                 :src="project.bodyImgSrcA" 
                 v-fix-footer-on-load />
        </div>
    </div>
</template>

<script>
import FixFooterOnLoad from '../../directives/FixFooterOnLoad';
import CommonUnorderedList from '../CommonUnorderedList.vue';

export default {
    directives: {
        FixFooterOnLoad
    },
    components: {
        CommonUnorderedList
    },
    props: {
        project: {
            type: Object,
            default: () => { 
                return {}; 
            }
        }
    },
    beforeMount() {
        console.log(this.project.tech !== []);
    }
}
</script>

<style lang="less" scoped>
@import './ProjectDetailsBody.less';
</style>