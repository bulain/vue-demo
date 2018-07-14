<style scoped>
.button {
  text-align: center;
}
</style>
<template>
    <div class="button">
        <Button>default</Button>
        <Button type="primary">primary</Button>
        <Button type="ghost">ghost</Button>
        <Button type="dashed">dashed</Button>
        <Button type="text">text</Button>
        <br>
        <Button type="info">info</Button>
        <Button type="success">success</Button>
        <Button type="warning">warning</Button>
        <Button type="error">error</Button>
        <br><br>
        <Button type="primary" shape="circle" icon="ios-search"></Button>
        <Button type="primary" icon="ios-search">search</Button>
        <Button type="primary" shape="circle" icon="ios-search">search</Button>
        <Button type="primary" shape="circle">search</Button>
        <br>
        <Button type="ghost" shape="circle" icon="ios-search"></Button>
        <Button type="ghost" icon="ios-search">search</Button>
        <Button type="ghost" shape="circle" icon="ios-search">search</Button>
        <Button type="ghost" shape="circle">search</Button>
        <br><br>
        <Button type="primary" size="large">Large</Button>
        <Button type="primary">Default</Button>
        <Button type="primary" size="small">Small</Button>
        <br>
        <Button type="primary" shape="circle" size="large">Large</Button>
        <Button type="primary" shape="circle">Default</Button>
        <Button type="primary" shape="circle" size="small">Small</Button>
        <br><br>
        <Button type="success" long>SUBMIT</Button>
        <Button type="error" long>DELETE</Button>
        <br><br>
        <Button>Default</Button>
        <Button disabled>Default</Button>
        <br>
        <Button type="primary">Primary</Button>
        <Button type="primary" disabled>Primary</Button>
        <br>
        <Button type="ghost">Ghost</Button>
        <Button type="ghost" disabled>Ghost</Button>
        <br>
        <Button type="dashed">Dashed</Button>
        <Button type="dashed" disabled>Dashed</Button>
        <br>
        <Button type="text">Text</Button>
        <Button type="text" disabled>Text</Button>
        <br><br>
        <Button type="primary" loading>Loading...</Button>
        <Button type="primary" :loading="loading" @click="toLoading">
            <span v-if="!loading">Click me!</span>
            <span v-else>Loading...</span>
        </Button>
        <Button type="primary" :loading="loading2" icon="checkmark-round" @click="toLoading2">
            <span v-if="!loading2">Click me!</span>
            <span v-else>Loading...</span>
        </Button>
        <br><br>
        <ButtonGroup>
            <Button type="primary">
                <Icon type="chevron-left"></Icon>
                Backward
            </Button>
            <Button type="primary">
                Forward
                <Icon type="chevron-right"></Icon>
            </Button>
        </ButtonGroup>
        <ButtonGroup>
            <Button type="primary" icon="ios-skipbackward"></Button>
            <Button type="primary" icon="ios-skipforward"></Button>
        </ButtonGroup>
        <ButtonGroup>
            <Button type="ghost" icon="ios-color-wand-outline"></Button>
            <Button type="ghost" icon="ios-sunny-outline"></Button>
            <Button type="ghost" icon="ios-crop"></Button>
            <Button type="ghost" icon="ios-color-filter-outline"></Button>
        </ButtonGroup>
        <br>
        <ButtonGroup shape="circle">
            <Button type="primary">
                <Icon type="chevron-left"></Icon>
                Backward
            </Button>
            <Button type="primary">
                Forward
                <Icon type="chevron-right"></Icon>
            </Button>
        </ButtonGroup>
        <ButtonGroup shape="circle">
            <Button type="primary" icon="ios-skipbackward"></Button>
            <Button type="primary" icon="ios-skipforward"></Button>
        </ButtonGroup>
        <ButtonGroup shape="circle">
            <Button type="ghost" icon="ios-color-wand-outline"></Button>
            <Button type="ghost" icon="ios-sunny-outline"></Button>
            <Button type="ghost" icon="ios-crop"></Button>
            <Button type="ghost" icon="ios-color-filter-outline"></Button>
        </ButtonGroup>
        <br><br>
        <ButtonGroup vertical>
            <Button type="ghost" icon="social-facebook"></Button>
            <Button type="ghost" icon="social-twitter"></Button>
            <Button type="ghost" icon="social-googleplus"></Button>
            <Button type="ghost" icon="social-tumblr"></Button>
        </ButtonGroup>
    </div>
</template>
<script>
export default {
  data() {
    return {
      loading: false,
      loading2: false
    };
  },
  methods: {
    toLoading() {
      this.loading = true;
    },
    toLoading2() {
      this.loading2 = true;
    }
  }
};
</script>
