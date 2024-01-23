import "reflect-metadata";
import { Container } from "inversify";
import { http } from "../http";
import { CartLocalStorageGateway, ProductHttpGateway } from "../gateways";
import { GetProductUseCase, ListProductsUseCase } from "@/@core/application/usecases/product";
import { AddProductInCartUseCase, ClearCartUseCase, GetProductsFromCartUseCase, RemoveProductFromCartUseCase } from "@/@core/application/usecases/cart";

export const Registry = {
    AxiosAdapter: Symbol.for("AxiosAdapter"),

    ProductGateway: Symbol.for("ProductGateway"),
    CartGateway: Symbol.for("CartGateway"),

    ListProductUseCase: Symbol.for("ListProductUseCase"),
    GetProductUseCase: Symbol.for("GetProductUseCase"),
    GetProductsFromCartUseCase: Symbol.for("GetProductsFromCartUseCase"),
    AddProductInCartUseCase: Symbol.for("AddProductInCartUseCase"),
    RemoveProductFromCartUseCase: Symbol.for("RemoveProductFromCartUseCase"),
    ClearCartUseCase: Symbol.for("ClearCartUseCase"),
}

export const container = new Container();


// ####### http
container.bind(Registry.AxiosAdapter).toConstantValue(http);


// ####### gateways
container.bind(Registry.ProductGateway).toDynamicValue((context) => {
    return new ProductHttpGateway(context.container.get(Registry.AxiosAdapter))
});

container.bind(Registry.CartGateway).to(CartLocalStorageGateway);


// ####### usecases
container.bind(Registry.ListProductUseCase).toDynamicValue((context) => {
    return new ListProductsUseCase(context.container.get(Registry.ProductGateway))
});

container.bind(Registry.GetProductUseCase).toDynamicValue((context) => {
    return new GetProductUseCase(context.container.get(Registry.ProductGateway))
});

container.bind(Registry.GetProductsFromCartUseCase).toDynamicValue((context) => {
    return new GetProductsFromCartUseCase(context.container.get(Registry.CartGateway))
});

container.bind(Registry.AddProductInCartUseCase).toDynamicValue((context) => {
    return new AddProductInCartUseCase(context.container.get(Registry.CartGateway))
});

container.bind(Registry.RemoveProductFromCartUseCase).toDynamicValue((context) => {
    return new RemoveProductFromCartUseCase(context.container.get(Registry.CartGateway))
});

container.bind(Registry.ClearCartUseCase).toDynamicValue((context) => {
    return new ClearCartUseCase(context.container.get(Registry.CartGateway))
});