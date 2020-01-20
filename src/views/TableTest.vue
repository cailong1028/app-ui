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
                <!--<Form ref="formRef" :model="form" inline :label-width="70">-->
                <Form ref="formRef" :model="form" :label-width="70">
                    <Form-item label="id" prop="id" hidden>
                        <Input type="text" v-model="form.id" placeholder="ID" clearable style="width: 200px"/>
                    </Form-item>
                    <FormItem label="name" prop="name">
                        <Input v-model="form.name" clearable style="width: 200px"></Input>
                    </FormItem>
                    <FormItem label="age" prop="age">
                        <Input v-model="form.age" clearable style="width: 200px"></Input>
                    </FormItem>
                    <FormItem label="url" prop="url">
                        <Input v-model="form.url" clearable style="width: 200px"></Input>
                    </FormItem>
                    <FormItem label="grade" prop="testUserExtend.grade">
                        <Input v-model="form.testUserExtend.grade" clearable style="width: 200px"></Input>
                    </FormItem>
                    <Button type="primary" :loading="submitLoading" @click="handleSubmit">submit</Button>
                </Form>
            </Col>
        </Row>
        <Row>
            <Col span="12">
                count is {{count}}
            </Col>
            <Col span="12">
                <Button @click="increment">increment</Button>
                <Button @click="reduce">reduce</Button>
                <Button @click="incrementN">increment2</Button>
                <Button @click="incrementObj">increment3</Button>
            </Col>
        </Row>
    </div>
</template>

<script>
    export default {
        name: 'index',
        components: {
            //HelloWorld
        },
        data() {
            return {
                loading: false,
                submitLoading: false,
                columns: [
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
                    }, {
                        title: 'childTex',
                        key: 'childTxt',
                        render(h, params) {
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
        },
        computed: {
            count(){
                return this.$store.state.count;
            }
        },
        methods: {
            submitLogin() {
                this.getRequest('/authUser/getAll', {
                    //accessToken: 'b4016b71-43b8-4e24-afe5-8033542bf727'
                }).then(res => {
                    //console.log(res)
                }).catch(e => {
                    //console.error(e)
                });
            },
            handleSubmit() {
                this.$refs.formRef.validate(valid => {
                    if (valid) {
                        this.submitLoading = true;
                        if (this.form.id) {

                        } else {
                            this.postRequest("/testUser/save", this.form).then(res => {
                                console.log(`done`)
                                this.submitLoading = false;
                            }).catch(e => {
                                console.error(`fail, ${e}`);
                            })
                        }
                    }
                })
            },
            increment(){
                this.$store.commit('increment');
            },
            reduce(){
                this.$store.commit('reduce');
            },
            incrementN(){
                this.$store.commit('incrementN', 2);
            },
            incrementObj(){
                this.$store.commit({
                    type: 'incrementObj',
                    amount: 3
                });
            },
        }
    }
</script>
