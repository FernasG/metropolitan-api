import { Controller, HttpCode, HttpStatus, Post } from '@nestjs/common';
import { SetupService } from './setup.service';

@Controller()
export class SetupController {
    constructor(private readonly setupService: SetupService) { }

    @Post()
    @HttpCode(HttpStatus.OK)
    async setup() {
        return this.setupService.setup();
    }
}