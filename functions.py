def calculate_discount(price, discount_percent):
    if discount_percent >= 20:
        discounted_price = price - (price * discount_percent / 100)
        return discounted_price
    else:
        return price

def main():
    original_price = float(input("Enter the original price of the item: "))
    discount_percent = float(input("Enter the discount percentage: "))
    
    final_price = calculate_discount(original_price, discount_percent)
    
    if final_price != original_price:
        print("Final price after applying discount: ${:.2f}".format(final_price))
    else:
        print("No discount applied. Original price: ${:.2f}".format(original_price))

main()