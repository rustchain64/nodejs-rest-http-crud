 example creates table successfully in PsQl
CREATE TABLE users
(
  id bigserial NOT NULL,
  firstName text NOT NULL,
  lastName text NOT NULL,
  username text NOT NULL,
  agentCode text NOT NULL,
  persona text NOT NULL,
  hash text NOT NULL,
  password text NOT NULL,
  CONSTRAINT user_pkey PRIMARY KEY (id)
);


<!DOCTYPE html>
<html>
  <head>
    <meta charset="utf-8" />
    <title>PIE API</title>
    <link
      rel="stylesheet"
      href="https://cdnjs.cloudflare.com/ajax/libs/wingcss/0.1.8/wing.min.css"
    />
    <style>
      input[type='number'] {
        width: 100%;
        padding: 12px 20px;
        margin: 8px 0;
        display: inline-block;
        border: 1px solid #ccc;
        border-radius: 4px;
        box-sizing: border-box;
        -webkit-transition: 0.5s;
        transition: 0.5s;
        outline: 0;
        font-family: 'Open Sans', serif;
      }
      #list-header {
        font-weight: bolder;
      }
    </style>
  </head>
  <body>
    <div class="container" id="app">
      <h2>PIE REFERRAL / USER :: API</h2>
     <!-- <div>{{ referrals }}</div> -->

     <form @submit.prevent="updateReferrals">
      <div class="row">
        <div class="col-4">
          <input
          type="text"
            v-model="referForm.yourname"              
            placeholder="yourname"
            ref="yourname"
            size="60"
          />
        </div>
        <div class="col-4">
          <input
            type="text"
            v-model="referForm.referralname"
            placeholder="referralname"
            ref="referralname"
            size="60"
          />
        </div>
        <div class="col-4">
          <input
            type="text"
            v-model="referForm.agentname"
            placeholder="agentname"
            ref="agentname"
            size="60"
          />
        </div>
      </div>
      <div class="row">
        <div class="col-4">
          <input
          type="text"
            v-model="referForm.refagentcode"              
            placeholder="refagentcode"
            ref="refagentcode"
            size="60"
          />
        </div>          
        <div class="col-4">
          <input
            type="text"
            v-model="referForm.businessname"
            placeholder="businessname"
            ref="businessname"
            size="60"
          />
        </div>
        <div class="col-4">
          <input
            type="text"
            v-model="referForm.phone"
            placeholder="phone"
            ref="phone"
            size="60"
          />
        </div>
      </div>
      <div class="row">
        <div class="col-4">
          <input
            type="text"
            v-model="referForm.email"
            placeholder="email"
            ref="email"
            size="60"
          />
        </div>
      
        <div class="col-4">
          <input
            type="text"
            v-model="referForm.ss"
            placeholder="ss"
            ref="ss"
            size="60"
          />
        </div>
        <div class="col-4">
          <input
            type="text"
            v-model="referForm.bankname"
            placeholder="bankname"
            ref="bankname"
            size="60"
          />
        </div>
      </div>
      <div class="row">
        <div class="col-4">
          <input
            type="text"
            v-model="referForm.routingnumber"
            placeholder="routingnumber"
            ref="routingnumber"
            size="60"
          />
        </div>
        <div class="col-4">
          <input
            type="text"
            v-model="referForm.accountnumber"
            placeholder="accountnumber"
            ref="accountnumber"
            size="60"
          />
        </div>
        <div class="col-4">
          <input
            type="text"
            v-model="referForm.title"
            placeholder="title"
            ref="title"
            size="60"
          />
        </div>
      </div>
      <div class="row">
        <div class="col-4">
          <input
            type="text"
            v-model="referForm.description"
            placeholder="description"
            ref="description"
            size="60"
          />
        </div>
        <div class="col-4">
          <input
            type="text"
            v-model="referForm.published"
            placeholder="published"
            ref="published"
            size="60"
          />
        </div>
        <input type="submit" value="Save Referral" />
      </div>
    </form>

     <h3>Referrals List</h3>
      <div class="row">
        <div class="col-1" id="list-header">Your Name</div>
        <div class="col-1" id="list-header">Referral Name</div>
        <div class="col-1" id="list-header">Agent Name</div>
        <div class="col-1" id="list-header">Agent Code</div>
        <div class="col-1" id="list-header">Business Name</div>
        <div class="col-1" id="list-header">Phone</div>
        <!-- <div class="col-1" id="list-header">Email</div> -->
        <!-- <div class="col-1" id="list-header">SS Number</div> -->
        <div class="col-1" id="list-header">Bank Name</div>
         <div class="col-2" id="list-header">Routing Number</div>
        <div class="col-2" id="list-header">Account Number</div>
        <!--<div class="col-2" id="list-header">Notes</div>
        <div class="col-2" id="list-header">Description</div>
        <div class="col-2" id="list-header">Published</div> -->
      </div>

      <div class="row" v-for="referral in referrals">
        <div class="col-1">{{ referral.yourname }}</div>
        <div class="col-1">{{ referral.referralname }}</div>
        <div class="col-1">{{ referral.agentname }}</div>
        <div class="col-1">{{ referral.agentcode }}</div>
        <div class="col-1">{{ referral.businessname }}</div>
        <div class="col-1">{{ referral.phone }}</div>
        <!-- <div class="col-2">{{ referral.email }}</div> -->
        <!-- <div class="col-1">{{ referral.ss }}</div> -->
        <div class="col-1">{{ referral.bankname }}</div>
        <div class="col-2">{{ referral.routingnumber }}</div>
        <div class="col-2">{{ referral.accountnumber }}</div>
        <!--<div class="col-2">{{ referral.title }}</div>
        <div class="col-2">{{ referral.description }}</div>
        <div class="col-2">{{ referral.published }}</div> -->
      
        <div class="col-1">
          <a @click="editReferral( referral )" class="btn">[E]</a>
          <a @click="removeReferral( referral )" class="btn">[X]</a>
        </div>
      </div>

      <div>###################################################################################</div>

      <h3>Add/Edit a User</h3>

      <form @submit.prevent="updateUsers">
        <div class="row">
          <div class="col-4">
            <input
            type="text"
              v-model="userForm.firstname"              
              placeholder="firstname"
              ref="firstname"
              size="60"
            />
          </div>
          <div class="col-4">
            <input
              type="text"
              v-model="userForm.lastname"
              placeholder="lastname"
              ref="lastname"
              size="60"
            />
          </div>
          <div class="col-4">
            <input
              type="text"
              v-model="userForm.username"
              placeholder="username"
              ref="username"
              size="60"
            />
          </div>
        </div>
        <div class="row">
          <div class="col-4">
            <input
            type="text"
              v-model="userForm.agentcode"              
              placeholder="agentcode"
              ref="agentcode"
              size="60"
            />
          </div>          
          <div class="col-4">
            <input
              type="text"
              v-model="userForm.persona"
              placeholder="persona"
              ref="persona"
              size="60"
            />
          </div>
          <div class="col-4">
            <input
              type="text"
              v-model="userForm.hash"
              placeholder="hash"
              ref="hash"
              size="60"
            />
          </div>
          <div class="col-4">
            <input
              type="text"
              v-model="userForm.password"
              placeholder="password"
              ref="password"
              size="60"
            />
          </div>
          <input type="submit" value="Save User" />
        </div>
        
      </form>

      <h3>Users List</h3>
      <!-- {{ users }} -->
      <div class="row">
        <div class="col-1" id="list-header">Id</div>
        <div class="col-1" id="list-header">First Name</div>
        <div class="col-1" id="list-header">Last Name</div>
        <div class="col-1" id="list-header">Username</div>        
        <div class="col-1" id="list-header">Agent Code</div>
        <div class="col-1" id="list-header">Persona</div>
        <div class="col-1" id="list-header">Hash</div>
        <div class="col-1" id="list-header">Password</div>
        
      </div>

      <div class="row" v-for="user in users">
        <div class="col-1">{{ user.id }}</div>
        <div class="col-1">{{ user.firstname }}</div>
        <div class="col-1">{{ user.lastname }}</div>
        <div class="col-1">{{ user.username }}</div>        
        <div class="col-1">{{ user.agentcode }}</div>
        <div class="col-1">{{ user.persona }}</div>
        <div class="col-1">{{ user.hash }}</div>
        <div class="col-1">{{ user.password }}</div>
        
        
        <div class="col-4">
          <a @click="editUser( user )" class="btn">[E]</a>
          <a @click="removeUser( user )" class="btn">[X]</a>
        </div>
      </div>
    </div>
    <script
      src="https://cdnjs.cloudflare.com/ajax/libs/vue/2.7.10/vue.min.js"
      integrity="sha512-H8u5mlZT1FD7MRlnUsODppkKyk+VEiCmncej8yZW1k/wUT90OQon0F9DSf/2Qh+7L/5UHd+xTLrMszjHEZc2BA=="
      crossorigin="anonymous"
      referrerpolicy="no-referrer"
    ></script>
    <script>
      const app = new Vue({
        el: '#app',
        data: {
          userForm: {
            id: -1,
            firstname: '',
            lastname: '',
            username: '',
            agentcode: '',
            persona: '',
            hash: '',
            password: '',           
          },
          referForm: {
            id: -1,
            yourname: '',
            referralname: '',
            agentname: '',
            refagentcode: '',
            businessname: '',
            phone: '',
            email: '',
            ss: '',
            bankname: '',
            routingnumber: '',
            accountnumber: '',
            title: '',
            description: '',
            published: '',    
          },
          referrals: [],
          users: [],
          method: '',
          url: '',
          data: {},
          user: '',
        },

        methods: {
          editUser(user) {
            console.log("edit user ", user.id);
            this.userForm.id = user.id;
            this.userForm.firstname = user.firstname;
            this.userForm.lastname = user.lastname;
            this.userForm.username = user.username;
            this.userForm.agentcode = user.agentcode;
            this.userForm.persona = user.persona;
            this.userForm.hash = user.hash;
            this.userForm.password = user.password;            
          },
          async removeUser(user) {
            console.log("DELETE USER remove user ", user);
            await fetch(`/api/users/${user.id}`, {
              method: 'DELETE',
            })
              .then(this._userSuccess)
              .catch(this._error);
          },
          
          async _refreshUserData() {
            console.log("REFRESH USER DATA get users ");
            const userResults = await fetch('/api/users', {
              method: 'GET',
            });
            if (userResults.ok) {
              const resultData = await userResults.json();
              this.users = resultData;
            } else {
              console.log(result.statusText);
            }
          },
          async updateUsers() {
            console.log("<< save button >>");
            this.userForm.firstname = this.$refs.firstname.value;
            this.userForm.lastname = this.$refs.lastname.value;
            this.userForm.username = this.$refs.username.value;
            this.userForm.agentcode = this.$refs.agentcode.value;            
            this.userForm.persona = this.$refs.persona.value;
            this.userForm.hash = this.$refs.hash.value;
            this.userForm.password = this.$refs.password.value;
            if (this.userForm.id == -1) {
              console.log("UPDATE CREATE USRERS :: ID :: ", this.userForm.id);
              this.method = 'POST';
              this.url = '/api/users';
              this.data.firstname = this.userForm.firstname;
              this.data.lastname = this.userForm.lastname;
              this.data.username = this.userForm.username;
              this.data.agentcode = this.userForm.agentcode;              
              this.data.persona = this.userForm.persona;
              this.data.hash = this.userForm.hash;
              this.data.password = this.userForm.password;
              console.log("THIS.DATA SENT TO FETCH", this.data);
            } else {
              console.log("UPDATE EXISTING USRERS :: ID :: ", this.userForm.id);
              this.method = 'PUT';
              this.url = '/api/users/' + this.userForm.id;
              this.data.firstname = this.userForm.firstname;
              this.data.lastname = this.userForm.lastname;
              this.data.username = this.userForm.username;
              this.data.agentcode = this.userForm.agentcode;              
              this.data.persona = this.userForm.persona;
              this.data.hash = this.userForm.hash;
              this.data.password = this.userForm.password;
              console.log("UPDATE EXISTING USRERS :: ID :: ", this.data);
            }

            await fetch(this.url, {
              method: this.method,
              headers: {
                'Content-Type': 'application/json',
              },              
              body: JSON.stringify(this.data),
            })
              .then(this._userSuccess)
              .catch(this._userError);
          },
          _userSuccess(response) {
            console.log("_userSuccess");
            this._clearUserForm();
            this._refreshUserData();
          },
          _userError(response) {
            console.log("COULDN'T fetch data _error");
            alert(
              response.data
                ? JSON.stringify(response.data)
                : response.statusText
            );
          },
          _clearUserForm() {
            this.userForm.firstname = '';
            this.userForm.lastname = '';
            this.userForm.username = '';
            this.userForm.agentcode = '';
            this.userForm.persona = '';
            this.userForm.hash = '';
            this.userForm.password = '';
            this.userForm.id = -1;
          },

          // #############################################

          async _refreshReferralData() {
            console.log("REFRESH REFERRAL DATA get referrals ");
            const referralResults = await fetch('/api/referrals', {
              method: 'GET',
            });
            if (referralResults.ok) {
              const resultData = await referralResults.json();
              this.referrals = resultData;
            } else {
              console.log(result.statusText);
            }
          },
          editReferral(referral) {
            console.log("edit referral ", referral.id);
            this.referForm.id = referral.id;
            this.referForm.yourname = referral.yourname;
            this.referForm.referralname = referral.referralname;
            this.referForm.agentname = referral.agentname;
            this.referForm.refagentcode = referral.agentcode;            
            this.referForm.businessname = referral.businessname;
            this.referForm.phone = referral.phone;
            this.referForm.email = referral.email;
            this.referForm.ss = referral.ss;
            this.referForm.bankname = referral.bankname;
            this.referForm.routingnumber = referral.routingnumber;
            this.referForm.accountnumber = referral.accountnumber;            
            this.referForm.title = referral.title;
            this.referForm.description = referral.description;
            this.referForm.published = referral.published;
            console.log("EDIT REFERRAL this.userForm.id >>> ", this.referForm.id);
          },
          async removeReferral(referral) {
            console.log("DELETE REFERRAL ", referral);
            await fetch(`/api/referrals/${referral.id}`, {
              method: 'DELETE',
            })
              .then(this._referralSuccess)
              .catch(this._referralError);
          },
          async updateReferrals() {            
            console.log("<< SAVE A REFERRAL >>");
            this.referForm.yourname = this.$refs.yourname.value;
            this.referForm.referralname = this.$refs.referralname.value;
            this.referForm.agentname = this.$refs.agentname.value;
            this.referForm.refagentcode = this.$refs.refagentcode.value;            
            this.referForm.businessname = this.$refs.businessname.value;
            this.referForm.phone = this.$refs.phone.value;
            this.referForm.email = this.$refs.email.value;
            this.referForm.ss = this.$refs.ss.value;
            this.referForm.bankname = this.$refs.bankname.value;
            this.referForm.routingnumber = this.$refs.routingnumber.value;
            this.referForm.accountnumber = this.$refs.accountnumber.value;            
            this.referForm.title = this.$refs.title.value;
            this.referForm.description = this.$refs.description.value;
            this.referForm.published = this.$refs.published.value;
            console.log("REFERRAL ID ", this.referForm.id);
            if (this.referForm.id == -1) {
              console.log("updateReferrals CREATE REFERRAL by POST ", this.referForm.id);
              this.method = 'POST';
              this.url = '/api/referrals';
              this.data.yourname = this.referForm.yourname;
              this.data.referralname = this.referForm.referralname;
              this.data.agentname = this.referForm.agentname;
              this.data.agentcode = this.referForm.refagentcode;              
              this.data.businessname = this.referForm.businessname;
              this.data.phone = this.referForm.phone;
              this.data.email = this.referForm.email;
              this.data.ss = this.referForm.ss;
              this.data.bankname = this.referForm.bankname;
              this.data.routingnumber = this.referForm.routingnumber;
              this.data.accountnumber = this.referForm.accountnumber;              
              this.data.title = this.referForm.title;
              this.data.description = this.referForm.description;
              this.data.published = this.referForm.published;

              console.log("REFERRAL.DATA POST TO FETCH", this.data);
            } else {
              console.log("updateReferrals UPDATE REFERRAL by PUT");
              this.method = 'PUT';
              this.url = '/api/referrals/' + this.referForm.id;
              this.data.yourname = this.referForm.yourname;
              this.data.referralname = this.referForm.referralname;
              this.data.agentname = this.referForm.agentname;
              this.data.agentcode = this.referForm.refagentcode;              
              this.data.businessname = this.referForm.businessname;
              this.data.phone = this.referForm.phone;
              this.data.email = this.referForm.email;
              this.data.ss = this.referForm.ss;
              this.data.bankname = this.referForm.bankname;
              this.data.routingnumber = this.referForm.routingnumber;
              this.data.accountnumber = this.referForm.accountnumber;              
              this.data.title = this.referForm.title;
              this.data.description = this.referForm.description;
              this.data.published = this.referForm.published;
              console.log("REFERRAL.UPDATE > PUT TO FETCH", this.data);
            }

            await fetch(this.url, {
              method: this.method,
              headers: {
                'Content-Type': 'application/json',
              },              
              body: JSON.stringify(this.data),
            })
              .then(this._referralSuccess)
              .catch(this._referralError);
          },
          _referralSuccess(response) {
            console.log("_referralSuccess");
            this._clearReferralForm();
            this._refreshReferralData();
          },
          _referralError(response) {
            console.log("COULDN'T fetch referral data _error");
            alert(
              response.data
                ? JSON.stringify(response.data)
                : response.statusText
            );
          },
          
          _clearReferralForm() {
            this.referForm.yourname = '';
            this.referForm.referralname = '';
            this.referForm.agentname = '';
            this.referForm.refagentcode = '';         
            this.referForm.businessname = '';
            this.referForm.phone = '';
            this.referForm.email = '';
            this.referForm.ss = '';
            this.referForm.bankname = '';
            this.referForm.routingnumber = '';
            this.referForm.accountnumber = '';          
            this.referForm.title = '';
            this.referForm.description = '';
            this.referForm.published = '';
           // this.referForm.id = -1;
          },
        },
        mounted: function () {
          this._refreshUserData();
          this._refreshReferralData();
        },
      });
    </script>
  </body>
</html>


    persona: { type: String, required: true },
    agentCode: { type: String, optional: true },
    username: { type: String, unique: true, required: true },
   
    hash: { type: String, required: true },
   
    firstName: { type: String, required: true },
    lastName: { type: String, required: true },
    createdDate: { type: Date, default: Date.now }


SELECT * FROM users WHERE id='3'
('Carson', 'Cook', 'captain', 'testcode', 'admin', 'cook', 'cook1234'),
# #########################################################################
POSTGRESS USERS TABLE
INSERT INTO users (firstName,lastName,username,agentCode,persona,hash,password)
VALUES
('James', 'Bond', 'secret', 'testcode', 'agent', 'agent','agent123'),
('Super', 'Admin', 'superman', 'testcode', 'admin', 'hero123', 'hero1234'),
('Carson', 'Cook', 'captain', 'testcode', 'admin', 'cook', 'cook1234'),
('Briton', 'Stender', 'thai', 'testcode', 'admin', 'land', 'land1234'),
('Whan', 'Valdez', 'oil', 'testCode', 'admin', 'tanker', 'tanker1234');

INSERT INTO users (firstName,lastName,username,agentCode,persona,hash,password)
VALUES
('Peter', 'Sellers', 'funny', 'testCode', 'merchant', 'fun', 'fun123');



# ######################################################################################

 The "default" ingress controller reports Degraded=True: 
 DegradedConditions: One or more other status conditions indicate a degraded state: 
 PodsScheduled=False (PodsNotScheduled: Some pods are not scheduled: 
 Pod "router-default-868fc755bd-x9zgm" cannot be scheduled: 
 0/1 nodes are available: 1 Insufficient cpu, 
 1 node(s) didn't match pod anti-affinity rules. 
 preemption: 0/1 nodes are available: 1 node(s) didn't match pod anti-affinity rules. Make sure you have sufficient worker nodes.), 
 DeploymentReplicasAllAvailable=False 
 (DeploymentReplicasNotAvailable: 1/2 of replicas are available
