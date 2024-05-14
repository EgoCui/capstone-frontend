Stage Manager
<template>
  <my-slot class="home">
    <div class="container">
      <h1>Genesian Theatre: Stage Manager's Report</h1>
      <form @submit.prevent="submitForm">
        <div>
          <label for="production">Production:</label>
          <input id="production" v-model="form.production" type="text"/>
        </div>
        <div>
          <label for="performance">Performance:</label>
          <input id="performance" v-model="form.performance" type="text"/>
        </div>
        <div>
          <label for="date">Date:</label>
          <input id="date" v-model="form.date" type="date"/>
        </div>
        <div>
          <label for="houseSize">House Size:</label>
          <input id="houseSize" v-model="form.houseSize" type="text"/>
        </div>
        <div>
          <label for="barCash">Bar Cash Takings:</label>
          <input id="barCash" v-model="form.barCash" type="text"/>
        </div>
        <div>
          <label for="barEFTPOS">Bar EFTPOS Takings:</label>
          <input id="barEFTPOS" v-model="form.barEFTPOS" type="text"/>
        </div>
        <div>
          <label for="boxOfficeCash">Box Office Cash Takings:</label>
          <input id="boxOfficeCash" v-model="form.boxOfficeCash" type="text"/>
        </div>
        <div>
          <label for="boxOfficeEFTPOS">Box Office EFTPOS Takings:</label>
          <input id="boxOfficeEFTPOS" v-model="form.boxOfficeEFTPOS" type="text"/>
        </div>
        <div>
          <label for="boxOfficeCreditCard">Box Office Credit Card Takings:</label>
          <input id="boxOfficeCreditCard" v-model="form.boxOfficeCreditCard" type="text"/>
        </div>
        <div>
          <label for="boxOfficeCheque">Box Office Cheque Takings:</label>
          <input id="boxOfficeCheque" v-model="form.boxOfficeCheque" type="text"/>
        </div>
        <div>
          <label for="FOHManager">FOH Manager:</label>
          <input id="FOHManager" v-model="form.FOHManager" type="text"/>
        </div>
        <div>
          <label for="StageManager">Stage Manager:</label>
          <input id="StageManager" v-model="form.StageManager" type="text"/>
        </div>
        <div>
          <label for="Operator">Operator:</label>
          <input id="Operator" v-model="form.Operator" type="text"/>
        </div>
        <div>
          <label for="FOHStaff1">FOH Staff 1:</label>
          <input id="FOHStaff1" v-model="form.FOHStaff1" type="text"/>
        </div>
        <div>
          <label for="FOHStaff2">FOH Staff 2:</label>
          <input id="FOHStaff2" v-model="form.FOHStaff2" type="text"/>
        </div>
        <div>
          <label for="FOHStaff3">FOH Staff 3:</label>
          <input id="FOHStaff3" v-model="form.FOHStaff3" type="text"/>
        </div>
        <div>
          <label for="FOHStaff4">FOH Staff 4:</label>
          <input id="FOHStaff4" v-model="form.FOHStaff4" type="text"/>
        </div>
        <div>
          <label for="FOHStaff5">FOH Staff 5:</label>
          <input id="FOHStaff5" v-model="form.FOHStaff5" type="text"/>
        </div>
        <div>
          <h2>Performance Times</h2>
          <table>
            <tr>
              <th></th>
              <th>Up</th>
              <th>Down</th>
              <th>Total</th>
            </tr>
            <tr>
              <td><label for="ActIUp">Act I Up:</label></td>
              <td><input id="ActIUp" v-model="form.ActIUp" type="text"/></td>
              <td><input id="ActIDown" v-model="form.ActIDown" type="text"/></td>
              <td><input id="ActITotal" v-model="form.ActITotal" type="text"/></td>
            </tr>
            <tr>
              <td><label for="IntervalUp">Interval Up:</label></td>
              <td><input id="IntervalUp" v-model="form.IntervalUp" type="text"/></td>
              <td><input id="IntervalDown" v-model="form.IntervalDown" type="text"/></td>
              <td><input id="IntervalTotal" v-model="form.IntervalTotal" type="text"/></td>
            </tr>
            <tr>
              <td><label for="ActIIUp">Act II Up:</label></td>
              <td><input id="ActIIUp" v-model="form.ActIIUp" type="text"/></td>
              <td><input id="ActIIDown" v-model="form.ActIIDown" type="text"/></td>
              <td><input id="ActIITotal" v-model="form.ActIITotal" type="text"/></td>
            </tr>
            <tr>
              <td><label for="RunningTimeUp">Running Time Up:</label></td>
              <td><input id="RunningTimeUp" v-model="form.RunningTimeUp" type="text"/></td>
              <td><input id="RunningTimeDown" v-model="form.RunningTimeDown" type="text"/></td>
              <td><input id="RunningTimeTotal" v-model="form.RunningTimeTotal" type="text"/></td>
            </tr>
          </table>
        </div>
        <div>
          <label for="TechnicalNotes">Technical Notes:</label>
          <input id="TechnicalNotes" v-model="form.TechnicalNotes" type="text"/>
        </div>
        <div>
          <label for="ActionRequired">Action Required:</label>
          <input id="ActionRequired" v-model="form.ActionRequired" type="text"/>
        </div>
        <div>
          <label for="SuppliesRequired">Supplies Required:</label>
          <input id="SuppliesRequired" v-model="form.SuppliesRequired" type="text"/>
        </div>
        <div>
          <label for="StageManagerNotes">Stage Manager Notes:</label>
          <input id="StageManagerNotes" v-model="form.StageManagerNotes" type="text"/>
        </div>
        <div>
          <label for="FansLightsDoorsCheck">Fans, Lights, Doors? :</label>
          <input id="FansLightsDoorsCheck" v-model="form.FansLightsDoorsCheck" type="text"/>
        </div>


        <!-- Additional fields can be added here -->
        <button type="submit">Submit Report</button>
      </form>
    </div>
  </my-slot>
</template>

<script>
import MySlot from "@/components/slot/index";
import axios from "axios";
export default {
  components: {
    MySlot,
  },
  data() {
    return {
      form: {
        production: '',
        performance: '',
        date: '',
        houseSize: '',
        barCash: '',
        barEFTPOS: '',
        boxOfficeCash: '',
        boxOfficeEFTPOS: '',
        boxOfficeCreditCard: '',
        boxOfficeCheque: '',
        FOHManager: '',
        StageManager: '',
        Operator: '',
        FOHStaff1: '',
        FOHStaff2: '',
        FOHStaff3: '',
        FOHStaff4: '',
        FOHStaff5: '',
        ActIUp: '',
        ActIDown: '',
        ActITotal: '',
        IntervalUp: '',
        IntervalDown: '',
        IntervalTotal: '',
        ActIIUp: '',
        ActIIDown: '',
        ActIITotal: '',
        RunningTimeUp: '',
        RunningTimeDown: '',
        RunningTimeTotal: '',
        TechnicalNotes: '',
        ActionRequired: '',
        SuppliesRequired: '',
        StageManagerNotes: '',
        FansLightsDoorsCheck: ''
      },
      emailForm: {
        email: 'Stage Manager\'s Report',
        subject: 'Stage Manager\'s Report',
        content: ''
      }
    };
  },
  methods: {
    async submitForm() {
      // Logic to handle form submission
      try {
        this.emailForm.content =
            "Production: " + this.form.production + "\n" +
            "Performance: " + this.form.performance + "\n" +
            "Date: " + this.form.date + "\n" +
            "House Size: " + this.form.houseSize + "\n" +
            "Bar Cash Takings: " + this.form.barCash + "\n" +
            "Bar EFTPOS Takings: " + this.form.barEFTPOS + "\n" +
            "Box Office Cash Takings: " + this.form.boxOfficeCash + "\n" +
            "Box Office EFTPOS Takings: " + this.form.boxOfficeEFTPOS + "\n" +
            "Box Office Credit Card Takings: " + this.form.boxOfficeCreditCard + "\n" +
            "Box Office Cheque Takings: " + this.form.boxOfficeCheque + "\n" +
            "FOH Manager: " + this.form.FOHManager + "\n" +
            "Stage Manager: " + this.form.StageManager + "\n" +
            "Operator: " + this.form.Operator + "\n" +
            "FOH Staff 1: " + this.form.FOHStaff1 + "\n" +
            "FOH Staff 2: " + this.form.FOHStaff2 + "\n" +
            "FOH Staff 3: " + this.form.FOHStaff3 + "\n" +
            "FOH Staff 4: " + this.form.FOHStaff4 + "\n" +
            "FOH Staff 5: " + this.form.FOHStaff5 + "\n\n" +
            "Act I Up: " + this.form.ActIUp + "\n" +
            "Act I Down: " + this.form.ActIDown + "\n" +
            "Act I Total: " + this.form.ActITotal + "\n" +
            "Interval Up: " + this.form.IntervalUp + "\n" +
            "Interval Down: " + this.form.IntervalDown + "\n" +
            "Interval Total: " + this.form.IntervalTotal + "\n" +
            "Act II Up: " + this.form.ActIIUp + "\n" +
            "Act II Down: " + this.form.ActIIDown + "\n" +
            "Act II Total: " + this.form.ActIITotal + "\n" +
            "Running Time Up: " + this.form.RunningTimeUp + "\n" +
            "Running Time Down: " + this.form.RunningTimeDown + "\n" +
            "Running Time Total: " + this.form.RunningTimeTotal + "\n\n" +
            "Technical Notes: " + this.form.TechnicalNotes + "\n" +
            "Action Required: " + this.form.ActionRequired + "\n" +
            "Supplies Required: " + this.form.SuppliesRequired + "\n" +
            "Stage Manager Notes: " + this.form.StageManagerNotes + "\n" +
            "Fans, Lights, Doors? : " + this.form.FansLightsDoorsCheck + "\n";
        const response = await axios.post('http://localhost:8090/send-mail', this.emailForm, {
          headers: {
            'Content-Type': 'application/json'
          }
        });

        console.log(response.data);
        console.log("Sending data:", this.formData);
        alert('Email sent successfully!');
      } catch (error) {
        console.error('Mail send failed:', error);
        alert('Mail send failed!');
      }
    }
  }
};
</script>

<style lang="scss" scoped>
.home {
  font-size: 18px;
  input[type="text"], input[type="date"], button {
    font-size: 16px;
    padding: 10px;
    width: 100%;
    margin-bottom: 10px;
  }
  label {
    display: block;
    margin-bottom: 5px;
    font-weight: bold;
  }
  .container {
    max-width: 800px;
    margin: 0 auto;
    padding: 20px;
  }
  button {
    background-color: #4CAF50;
    color: white;
    border: none;
    cursor: pointer;
    transition: background-color 0.3s;
  }
  button:hover {
    background-color: #45a049;
  }
  // Up Down form
  table {
    width: 100%;
    border-collapse: collapse;
    margin-top: 20px;
  }
  table, th, td {
    border: 1px solid #ccc;
  }
  th, td {
    padding: 8px;
    text-align: left;
  }
  th {
    background-color: #f2f2f2;
  }
}
</style>
