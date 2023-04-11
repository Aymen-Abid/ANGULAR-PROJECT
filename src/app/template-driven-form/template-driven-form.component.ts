import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormControl, Validators } from '@angular/forms';

@Component({
  selector: 'app-template-driven-form',
  templateUrl: './template-driven-form.component.html',
  styleUrls: ['./template-driven-form.component.css']
})
export class TemplateDrivenFormComponent implements OnInit {

  constructor(
    private formBuilder: FormBuilder,

    ) { }
    form = this.formBuilder.group({
      nom: new FormControl({value: null, disabled: false}, Validators.required),
      email: new FormControl({value: null, disabled: false}, [Validators.required,Validators.email]),
      typeCarte: new FormControl({value: null, disabled: false}, Validators.required),
      numCarte: new FormControl({value: null, disabled: false}, [Validators.required,Validators.min(15),Validators.max(17)]),
      dateExp: new FormControl({value: null, disabled: false}, Validators.required),
      code: new FormControl({value: null, disabled: false}, Validators.required),

    });


  ngOnInit(): void {
  }

  getFormControl(key: string) {

        return this.form.get(key) as FormControl;

  }

  submit() {
    console.log(this.form.valid)
  }
}
