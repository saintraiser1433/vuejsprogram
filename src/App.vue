<template>
  <h4>App Component Text</h4>
    <ChildStyles>
      <h4>dasdasd</h4>
    </ChildStyles>
</template>
 

<script>
  import ChildStyles from './components/ChildStyles.vue';
  export default {
    name:'App',
    components: {
      ChildStyles
    }
  }
</script>

<style scoped>
h4{
  color:orange;
}
</style>

<!-- end -->
<!-- <template>
  <Namelist>
    <template v-slot:default="slotProps">
      {{ slotProps.firstName }} {{ slotProps.lastName }} 
    </template>
  </Namelist>
  <Namelist>
    <template v-slot:default="slotProps">
       {{ slotProps.lastName }} 
    </template>
  </Namelist>
</template>
 

<script>
import Namelist from './components/Namelist.vue';
  export default {
    name:'App',
    components: {
      Namelist
    }
  }
</script>

<style scoped>

</style> -->


<!-- end -->
<!-- <template>
  <Card></Card>
  <Card>Card content</Card>
  <Card>
    <h2>
      Card content
  </h2>
  </Card>
  <Card>
    <img src="https://picsum.photos/200">
  </Card>
  <Card>
    <template v-slot:header>
      <h3>Header</h3>
    </template>
    <template v-slot:default>
      <img src="https://picsum.photos/200">
    </template>
    <template v-slot:footer>
      <button>View Details</button>
    </template>
  </Card>
</template> -->
  


<!-- <script>
 import Card from './components/Card.vue';
  export default {
    name:'App',
    components: {
      Card
    }
  }
</script>

<style scoped>

</style> -->

<!-- end -->
<!-- <template>
   <Input v-model="name"></Input>

</template> -->

<!-- <script>

  import Input from './components/Input.vue';
  export default {
    name: 'App',
    components: {

      Input
    },
    data(){
      return {
        name: ''
      }
    },
    methods: {},
    
  }
</script> -->

<!-- <style scoped>

</style> -->


<!-- <template> -->
  <!-- <MyGreet name="Bruce" heroName="Batman" />
  <MyGreet name="Clark" heroName="Superman" />
  <MyGreet :name="name" :heroName="channel" /> -->
  <!-- <h3>App Component username {{ name }}</h3> -->
    <!-- <PopUp v-show="showPopup" @close="closePopup "></PopUp>
    <button @click="showPopup = true">Show Popup</button>
</template> 

<script>
import PopUp from './components/PopUp.vue';
export default {
  name: 'App',
  components: {
    PopUp
  },

  data(){
    return {
      showPopup:false
    }
  },
  methods: {
    closePopup(name){
      this.showPopup = false;
      console.log(name);
    }
  }
 

}
</script> -->
<!-- <template> -->
  <!-- <MyGreet name="Bruce" heroName="Batman" />
  <MyGreet name="Clark" heroName="Superman" />
  <MyGreet :name="name" :heroName="channel" /> -->
  <!-- <h3>App Component username {{ name }}</h3>
    <ComponentC></ComponentC>
</template>  -->

<!-- <script>
import ComponentC from './components/ComponentC.vue'
export default {
  name: 'App',
  components: {
    ComponentC
  },
  data(){
    return {
      name :'Vishwas'
    }
  
  },
  provide() {
    return {
      username:this.name
    }
   
  }

}
</script> -->

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}
</style>
