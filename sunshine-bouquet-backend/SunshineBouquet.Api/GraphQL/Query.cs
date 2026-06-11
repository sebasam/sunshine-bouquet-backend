using SunshineBouquet.Domain.Entities;
using SunshineBouquet.Infrastructure.Data;
using System.Linq;

namespace SunshineBouquet.Api.GraphQL;

public class Query
{
    [UseFiltering]
    public IQueryable<Order> GetOrders([Service] ApplicationDbContext context) 
        => context.Orders;

    public Order? GetOrderById(Guid id, [Service] ApplicationDbContext context) 
        => context.Orders.FirstOrDefault(o => o.Id == id);
}