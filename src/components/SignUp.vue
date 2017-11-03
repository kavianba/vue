<template>
<div class="row">
	<div class="col-2"></div>
	<div class="col-8">
	<form @submit.prevent="validateBeforeSubmit" v-if="!formSubmitted">
	  <div class="form-group row" :class="{'has-error': errors.has('firstName') }">
	    <label for="firstName" class="col-3 col-form-label text-right">First Name</label>
	    <div class="col-9">
	      <input class="form-control" type="text"  name="firstName" v-model="firstName" v-validate="firstName" data-vv-rules="required"  />
	    </div>
	   <span class="text-danger offset-2 text-right col-10" v-if="errors.has('firstName')" >First Name is required</span>
	  </div>
	  <div class="form-group row" >
	  	    <label for="lastName" class="col-3 col-form-label text-right">Last Name</label>
	  	    <div class="col-9">
	  	      <input class="form-control" type="text" name="lastName"  v-model="lastName" v-validate="lastName" data-vv-rules="required"  />
	  	    </div>
	  	<span class="text-danger offset-2 text-right col-10" v-if="errors.has('lastName')">{{ errors.first('lastName') }}</span>   
	  </div>
	  <div class="form-group row" >
	  	    <label for="email" class="col-3 col-form-label text-right">Email Address</label>
	  	    <div class="col-9">
	  	      <input class="form-control" type="text"  name="email" v-model="email" v-validate="email" data-vv-rules="required|email"  />
	  	    </div>
	  	<span class="text-danger offset-2 text-right col-10" v-if="errors.has('email')">{{ errors.first('email') }}</span>     
	  </div>
	  <div class="form-group row" >
	  	    <label for="password" class="col-3 col-form-label text-right">Password</label>
	  	    <div class="col-9">
	  	      <input class="form-control" type="text"  name="password" v-model="password" v-validate="password" data-vv-rules="required"  />
	  	    </div>
	  	     <span class="text-danger offset-2 text-right col-10" v-if="errors.has('password')">{{ errors.first('password') }}</span>
	  </div>
	  <div class="form-group row" >
	  	    <label for="confirmPassword" class="col-3 col-form-label text-right">Confirm Password</label>
	  	    <div class="col-9">
	  	      <input class="form-control" type="text"  name="confirmPassword" v-model="confirmPassword" v-validate="confirmPassword" data-vv-rules="required|confirmed:password"  />
	  	    </div>
	  	     <span class="text-danger offset-2 text-right col-10" v-if="errors.has('confirmPassword')">{{ errors.first('confirmPassword') }}</span>
	  </div>
	  <button type="submit" class="btn btn-primary">Submit</button>
	</form>
	</div>
	<div class="col-2"></div>
	</div>
</template>

<script>


export default {
  name: 'SignUp',
  data () {
    return {
      firstName: '',
      lastName: '',
      email: '',
      password: '',
      confirmPassword: '',
      formSubmitted: false
    }
  },
  methods: {
    validateBeforeSubmit(e) {
        this.$validator.validateAll();
        if (!this.errors.any()) {
            this.submitForm()
        }
      },
    submitForm(){
      this.formSubmitted = true
      alert('valid');
    }
  }
}
</script>