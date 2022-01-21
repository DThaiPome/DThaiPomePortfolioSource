<template>
    <common-body class="resume-container">
        <div id="resume-link">
            <a 
                v-text="'Click here to view my resume'"
                href="https://drive.google.com/file/d/13RWaQL8afmtgkIgX8pkKLLIhdiYmw209/view?usp=sharing" target="_blank" />
        </div>
    </common-body>
</template>

<script>
import CommonBody from '../components/CommonBody.vue';

export default {
    components: {
        CommonBody
    }
}
</script>

<style lang="less" scoped>
#resume-link {
    margin: auto;
    text-align: center;
    font-size: 24px;
}

@media only screen and (max-width: 760px) {
    #resume-link {
        font-size: 16px;
    }
}
</style>