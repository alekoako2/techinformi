import { CommonModule } from '@angular/common'
import { NgModule } from '@angular/core'

import { environment } from '@env'

// NPM Modules
import { AngularFirestoreModule } from '@angular/fire/firestore'
import { AngularFireModule } from '@angular/fire'

@NgModule({
  declarations: [],
  imports: [
    CommonModule,
    AngularFireModule.initializeApp(environment.firebase),
    AngularFirestoreModule,
  ],
  exports: [],
})
export class FirebaseModule {}
