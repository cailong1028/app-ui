<template>
  <div class="home">
    <!-- <img alt="Vue logo" src="../assets/logo.png"> -->
    <Row>
      <Col span="24">
        <Card>
          <Table stripe :columns="columns" :data="data" ref="table"/>
        </Card>
      </Col>
    </Row>
    <Row>
      <Button
        class="login-btn"
        type="primary"
        size="large"
        :loading="loading"
        @click="submitLogin"
        long
      >
        <span v-if="!loading">{{ 'login' }}</span>
        <span v-else>{{ 'logining' }}</span>
      </Button>
    </Row>
    <Row>
      <Col>
        <Form ref="formRef" :model="form">
          <FormItem lable="id" prop="id" hidden>
            <Input v-model="form.id"></Input>
          </FormItem>
          <FormItem lable="name" prop="name">
            <Input v-model="form.name"></Input>
          </FormItem>
          <FormItem lable="age" prop="age">
            <Input v-model="form.age"></Input>
          </FormItem>
          <FormItem lable="url" prop="url">
            <Input v-model="form.url"></Input>
          </FormItem>
          <FormItem lable="grade" prop="testUserExtend.grade">
            <Input v-model="form.testUserExtend.grade"></Input>
          </FormItem>
          <Button type="primary" :loading="submitLoading" @click="handleSubmit">submit</Button>
        </Form>
      </Col>
    </Row>
  </div>
</template>

<script>
/* eslint-disable */ 
export default {
  name: 'index',
  components: {
    //HelloWorld
  },
  methods:{
    submitLogin(){
      this.getRequest('/authUser/getAll', {
        //accessToken: 'b4016b71-43b8-4e24-afe5-8033542bf727'
      }).then(res => {
        //console.log(res)
      }).catch(e => {
        //console.error(e)
      });      
    },
    handleSubmit(){
      this.$refs.formRef.validate(valid => {
        if(valid){
          this.submitLoading = true;
          if(this.form.id){

          }else{
            this.postRequest("/testUser/save", this.form).then(res => {
              console.log(`done`)
              this.submitLoading = false;
            }).catch(e => {
              console.error(`fail, ${e}`);
            })
          }
        }
      })
    }
  },
  data(){
    return {
      loading: false,
      submitLoading: false,
      columns:  [
        {
            title: 'Name',
            key: 'name'
        },
        {
            title: 'Age',
            key: 'age'
        },
        {
            title: 'Address',
            key: 'address'
        },{
          title: 'childTex',
          key: 'childTxt',
          render(h, params){
            console.log(params)
            return h('span', params.row.child.txt);
          }
        }
      ],
      data: [
        {
            name: 'John Brown',
            age: 18,
            address: 'New York No. 1 Lake Park',
            date: '2016-10-03',
            child: {
              txt: 'aaa'
            }
        },
        {
            name: 'Jim Green',
            age: 24,
            address: 'London No. 1 Lake Park',
            date: '2016-10-01',
            child: {
              txt: 'bbb'
            }
        },
        {
            name: 'Joe Black',
            age: 30,
            address: 'Sydney No. 1 Lake Park',
            date: '2016-10-02',
            child: {
              txt: 'ccc'
            }
        },
        {
            name: 'Jon Snow',
            age: 26,
            address: 'Ottawa No. 2 Lake Park',
            date: '2016-10-04',
            child: {
              txt: 'ddd'
            }
        }
      ],
      form: {
        id: '',
        name: '',
        age: '',
        url: '',
        testUserExtend: {
          grade: ''
        }
      }
    };
  }
}
</script>
