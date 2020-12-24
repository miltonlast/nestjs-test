import { Body, Controller, Post } from "@nestjs/common";
import { ApiBody, ApiTags } from "@nestjs/swagger";
import { AuthService } from "./auth.service";

@ApiTags('Auth')
@Controller('auth')
export class AuthController {
    constructor(
        private readonly _authService: AuthService
    ) { }

    @Post('login')
    @ApiBody({ schema: { example: { username: 'john', password: 'changeme' } } })
    async login(@Body() req: any) {
        return this._authService.login(req);
    }
}