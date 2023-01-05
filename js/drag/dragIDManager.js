class IDManger {
    #ID

    setID(newID) {
        this.#ID = newID
    }

    getID() {
        return this.#ID
    }
}

const manager = new IDManger();

export {manager}