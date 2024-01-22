<template>

<CounterComposition/>
</template>


<script>
import CounterComposition from './components/CounterComposition.vue';
  export default {
    name:'App',
    components: {
      CounterComposition
    }
  }
</script>

<style scoped>

</style>
<!-- tutorial 63 and 64 -->
<!-- <template>
  <input type="text" placeholder="Enter First Name" v-model="fname"/>
  <input type="text" placeholder="Enter Last Name" v-model="lname"/>


  <Tutorial63Props :fname="fname" :lname="lname" @myValue="getValue"/>
</template>

<script>
import Tutorial63Props from './components/Tutorial63Props.vue';
import { reactive,toRefs } from 'vue';
  export default {
    name:'App',
    components : {
      Tutorial63Props
    },
    setup(){
      const state = reactive({
        fname : '',
        lname : ''

      });

      function getValue(val){
        alert(val)
      }

      return {
        getValue,
        ...toRefs(state)
      }

    }
  }
</script> -->


<!-- <template>
  <Tutorial62/>
</template>

<script>
import Tutorial62 from './components/Tutorial62.vue';
  export default {
    name:'App',
    components : {
      Tutorial62
    }
  }
</script> -->

<!-- <template>
  <Tutorial60Provider/>
</template>

<script>
import Tutorial60Provider from './components/Tutorial60Provider.vue';
  export default {
    name:'App',
    components : {
      Tutorial60Provider
    }
  }
</script> -->

<!-- tutorial 58 and 59 -->
<!-- <template>
  <Tutorial58and59Watchers/>
</template>

<script>
import Tutorial58and59Watchers from './components/Tutorial58and59Watchers.vue';
  export default {
    name:'App',
    components : {
      Tutorial58and59Watchers
    }
  }
</script> -->
<!-- tutorial 58 -->
<!-- <template>
  <Tutorial57ComputerApi/>
</template>

<script>
import Tutorial57ComputerApi from './components/Tutorial57ComputerApi.vue';
  export default {
    name:'App',
    components : {
      Tutorial57ComputerApi
    }
  }
</script> -->
<!-- tutorial 56 -->
<!-- <template>
  <Tutorial56VModel/>
</template>

<script>
import Tutorial56VModel from './components/Tutorial56VModel.vue';
  export default {
    name:'App',
    components : {
      Tutorial56VModel
    }
  }
</script>

<style scoped>

</style> -->
<!-- tutorial 55 -->
<!-- <template>
   <Tutorial55Methods></Tutorial55Methods>
</template>


<script>
import Tutorial55Methods from './components/Tutorial55Methods.vue';
  export default {
    name:'App',
    components:{
      Tutorial55Methods
    }
  }
</script>

<style scoped>

</style> -->

<!-- <template>
  <Tutorial54/>
  <Tutorial54v2/>
</template>
 

<script>
import Tutorial54 from './components/Tutorial54.vue';
import Tutorial54v2 from './components/Tutorial54v2.vue';
  export default {
      name:'App',
      components : {
        Tutorial54,
        Tutorial54v2
      }
  }
</script>

<style scoped>

</style> -->
<!-- tutorial 53 -->
<!-- <template>
  <Data/>
</template>
 

<script>
  import Data from './components/Data.vue';
  export default {
    name : 'App',
    components: {
      Data
    }
  }
</script>

<style scoped>

</style> -->

<!-- 
<template>
  <div>
    <ClickCounter></ClickCounter>
    <HoverCounter/>
  </div>
</template>

<script>
  import ClickCounter from './components/ClickCounter.vue';
  import HoverCounter from './components/HoverCounter.vue';
  export default {
    name:'App',
    components: {
      ClickCounter,
      HoverCounter
    }
  }
</script>

<style  scoped>

</style> -->
<!-- Template Ref -->
<!-- <template>
  <div>
    <TemplateRef></TemplateRef>
  </div>
</template>

<script>
import TemplateRef from './components/TemplateRef.vue';
export default {
  name: 'App',
  components: {
    TemplateRef
  }

}
</script>

<style scoped></style> -->

<!-- LifeCycle Hook End -->
<!-- <template>
  <div>
    <Parent></Parent>
  </div>
</template>

<script>
  import Parent from './components/Parent.vue';
  export default {
    name:'App',
    components : {
      Parent
    }
  }
</script>

<style scoped>

</style> -->


<!-- HTTP END -->
<!-- <template>
  <PostListHttp></PostListHttp>
  <CreatePost></CreatePost>
</template>

<script>
  import PostListHttp from './components/PostListHttp.vue';
  import CreatePost from './components/CreatePost.vue';
  export default {
    name:'App',
    components: {
      PostListHttp,
      CreatePost
    }
  }
</script>

<style scoped>

</style> -->



<!-- end -->
<!-- <template>
  <teleport to="#portal-root">
    <Portal />
  </teleport>

</template>
  

<script>
import Portal from './components/Portal.vue';
  export default {
    name:'App',
    components: {
      Portal
    }
  }
</script>

<style scoped>

</style> -->
<!-- <template>
  <button @click="activeTab = 'TabA'">Tab A</button>
  <button @click="activeTab = 'TabB'">Tab B</button>
  <button @click="activeTab = 'TabC'">Tab C</button>
  <keep-alive>
    <component :is="activeTab"/>
  </keep-alive> -->
   

  <!-- <TabA v-if="activeTab === 'TabA'" />
  <TabB v-if="activeTab === 'TabB'"/>
  <TabC v-if="activeTab === 'TabC'"/> -->
<!-- </template>



<script>
import TabA from './components/TabA.vue';
import TabB from './components/TabB.vue';
import TabC from './components/TabC.vue';
export default {
  name: 'App',
  components: {
    TabA,
    TabB,
    TabC
  },
  data(){
    return {
      activeTab:'TabA'
    }
 
  }
}
</script>

<style scoped></style> -->


<!-- END -->
<!-- <template>
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
</style> -->

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
