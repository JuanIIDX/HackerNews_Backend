"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
var __param = (this && this.__param) || function (paramIndex, decorator) {
    return function (target, key) { decorator(target, key, paramIndex); }
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.StoryService = void 0;
const common_1 = require("@nestjs/common");
const typeorm_1 = require("@nestjs/typeorm");
const story_entity_1 = require("./entities/story.entity");
const typeorm_2 = require("typeorm");
let StoryService = class StoryService {
    constructor(storyRepository) {
        this.storyRepository = storyRepository;
    }
    create(createStoryDto) {
        const story = this.storyRepository.create(createStoryDto);
        return this.storyRepository.save(story);
    }
    findAll() {
        return this.storyRepository.find();
    }
    findOne(id) {
        return this.storyRepository.findOne({
            where: { id },
        });
    }
    update(id, updateStoryDto) {
        return this.storyRepository.update(id, updateStoryDto);
    }
    remove(id) {
        return this.storyRepository.delete(id);
    }
};
exports.StoryService = StoryService;
exports.StoryService = StoryService = __decorate([
    (0, common_1.Injectable)(),
    __param(0, (0, typeorm_1.InjectRepository)(story_entity_1.Story)),
    __metadata("design:paramtypes", [typeorm_2.Repository])
], StoryService);
//# sourceMappingURL=story.service.js.map