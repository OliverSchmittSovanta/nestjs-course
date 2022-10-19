import { MessagesRepository } from "./messages.repository";

export class MessagesService {
    repository: MessagesRepository;

    constructor() {
        this.repository = new MessagesRepository();
    }

    findOne(id: string) {
        return this.repository.findOne(id);
    }

    findAll() {
        return this.repository.findAll();
    }

    create(content: string) {
        return this.repository.create(content);
    }
}