"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.AppModule = void 0;
const common_1 = require("@nestjs/common");
const app_controller_1 = require("./app.controller");
const app_service_1 = require("./app.service");
const news_module_1 = require("./news/news.module");
const typeorm_1 = require("@nestjs/typeorm");
const config_1 = require("./config");
const news_entity_1 = require("./news/entities/news.entity");
const story_module_1 = require("./story/story.module");
const story_entity_1 = require("./story/entities/story.entity");
let AppModule = class AppModule {
};
exports.AppModule = AppModule;
exports.AppModule = AppModule = __decorate([
    (0, common_1.Module)({
        imports: [
            typeorm_1.TypeOrmModule.forRoot({
                type: 'postgres',
                port: config_1.config.DATABASE_PORT,
                host: config_1.config.DATABASE_HOST,
                database: config_1.config.DATABASE_NAME,
                username: config_1.config.DATABASE_USERNAME,
                password: config_1.config.DATABASE_PASSWORD,
                entities: [news_entity_1.News, story_entity_1.Story
                ],
                synchronize: true,
            }),
            news_module_1.NewsModule,
            story_module_1.StoryModule
        ],
        controllers: [app_controller_1.AppController],
        providers: [app_service_1.AppService],
    })
], AppModule);
//# sourceMappingURL=app.module.js.map