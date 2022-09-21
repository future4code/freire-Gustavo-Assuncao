import { v4 } from 'uuid'

export class IdGenVersion5 {
    public generate = (): string => {
        return v4()
    }
}