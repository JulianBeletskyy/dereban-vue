<template>
    <div>
        <simplert :useRadius="true"
                  :useIcon="true"
                  ref="simplert">
        </simplert>
    </div>
</template>

<script>
    export default {
        name: 'logger',
        data () {
            return {
                obj: {
                    title: '',
                    message: '',
                    type: 'info',
                    //onClose: this.onClose,
                    disableOverlayClick: false,
                    hideAllButton: true,
                    showXclose: true,
                    onOpen: this.timeOutClose
                }
            }
        },
        methods: {
            timeOutClose () {
                setTimeout(() => {
                    this.$refs.simplert.justCloseSimplert();
                }, 1000);
            },
            info (text) {
                this.obj.title = text;
                this.$refs.simplert.openSimplert(this.obj);
            },
            success (text) {
                this.obj.title = text;
                this.obj.type = 'success';
                this.$refs.simplert.openSimplert(this.obj);
            },
            warning (text) {
                this.obj.title = text;
                this.obj.type = 'warning';
                this.$refs.simplert.openSimplert(this.obj);
            },
            error (text) {
                console.log(this);
                this.obj.title = text;
                this.obj.type = 'error';
                this.$refs.simplert.openSimplert(this.obj);
            }
        },
        components: {
           
        }
    }
</script>

<style>

</style>