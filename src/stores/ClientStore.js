import { observable, makeObservable, action, computed } from 'mobx'

export class ClientStore {

    constructor(name, owner, country) {
        this.name = name
        this.owner = owner
        this.country = country
        this.emailType= null
        this.firstContact= new Date()
        this.sold = false

        makeObservable(this, {
            name: observable,
            country: observable,
            owner: observable,
            sold: observable,
            firstContact: observable,
            emailType: observable

        })
    }

}