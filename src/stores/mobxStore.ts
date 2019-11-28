
import {action, computed, observable} from 'mobx'
import {IMobxStore} from '../models/IMobxStore'
 
class MobxStore implements IMobxStore {
    @observable  public name: string = "world"
 
    @computed
    public get greeting(): string {
        return `hello ${this.name}`
    }
 
    @action.bound
    public setName(name: string): void{
        this.name = name
    }
 
}
 
export default MobxStore