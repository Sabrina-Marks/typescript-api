import { FastifyInstance, FastifyPluginOptions, FastifyRequest, FastifyReply } from "fastify";
import { CreateCostumerController } from "./controllers/createCostummerController";
import { ListCustomersController } from "./controllers/listCustomersControlers";
import { DeleteCustomerController } from "./controllers/deleteCustomerController";


export async function routes(fastify: FastifyInstance, option: FastifyPluginOptions,) {

    fastify.get("/cliente", async (request: FastifyRequest, reply: FastifyReply) => {
        return new ListCustomersController().handle(request, reply);
    });

    fastify.post("/cliente", async (request: FastifyRequest, reply: FastifyReply) => {
        return new CreateCostumerController().handle(request, reply);
    });

    fastify.delete("/cliente", async (request: FastifyRequest, reply: FastifyReply) => {
        return new DeleteCustomerController().handle(request, reply);
    });
};
