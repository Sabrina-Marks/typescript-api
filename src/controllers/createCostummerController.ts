import { FastifyRequest, FastifyReply } from "fastify";
import { CreateCostumerService } from "../services/createCosttumersServices";

class CreateCostumerController {
    async handle(request: FastifyRequest, reply: FastifyReply) {
        const { name, email } = request.body as { name: string, email: string };

        const customerService = new CreateCostumerService();

        const customer = await customerService.execute({ name, email });

        reply.send(customer);
    };
};

export { CreateCostumerController };
