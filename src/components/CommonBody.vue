<template>
    <div id="body-container">
        <slot />
    </div>
</template>

<style lang="less" scoped>
    @import '../assets/style/colors';
    @import '../assets/style/animations';

    #body-container {
        max-width: 1200px;
        margin: auto;
        padding: 10pt;
        // .infinite-background(
        //     url('../assets/img/backgrounds/subtle background-small.png'),
        //     url('../assets/img/backgrounds/subtle background-smaller.png'),
        //     url('../assets/img/backgrounds/subtle background.png'),
        //     0 0, -2pt, -1pt);
        background: black;
        border: 4pt solid @BORDER-COLOR;
        border-radius: 40pt;

        hr {
            color: @BORDER-COLOR;
        }
    }

    @media only screen and (max-width: 760px) {
        padding: 0;
    }
</style>