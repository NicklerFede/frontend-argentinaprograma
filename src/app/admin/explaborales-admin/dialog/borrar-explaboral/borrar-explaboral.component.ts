import { Component, Inject } from '@angular/core';
import { FormBuilder, FormControl, Validators } from '@angular/forms';
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';
import { DialogExplaboral } from 'src/app/interfaces/dialogExplaboral';

@Component({
  selector: 'app-borrar-explaboral',
  templateUrl: './borrar-explaboral.component.html',
  styleUrls: ['./borrar-explaboral.component.scss'],
})
export class BorrarExplaboralComponent {
  dataSource: any;

  constructor(
    public dialogRef: MatDialogRef<BorrarExplaboralComponent>,
    @Inject(MAT_DIALOG_DATA) public data: DialogExplaboral,
    public fb: FormBuilder
  ) {}

  formControl = new FormControl('', [Validators.required]);

  getError() {
    return this.formControl.hasError('required') ? 'El campo es requerido' : '';
  }

  onNoClick(): void {
    this.dialogRef.close();
  }
}
