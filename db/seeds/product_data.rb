FOOD_NAME = {
  "Кулинария": ['Салат с креветками', 'Паста', 'Суп', 'Блинчики', 'Сэндвич', 'Суши'],
  "Бакалея": ['Клубника', 'Бананы', 'Фасоль', 'Морковь', 'Перец',],
  "Вегетарианское": ['Орехи', 'Тыквенный суп'],
  "Сладкое": ['Пончики', 'Торт'],
  "Напитки": ['Йогурт', 'Сок']
}.as_json

def create_products
  6.times do
    Product.categories.each_value do |value|
      create_product('manager@perekrestok.com', value)
      create_product('manager@karavaev_brothers.com', value)
      create_product('manager@mcdonalds.com', value)
      create_product('manager@french_bakery.com', value)
    end
  end
end

def create_product(user_email, category)
  user = User.find_by_email(user_email)

  Product.create(
    name: FOOD_NAME[category].sample,
    weight_type: 'в порциях',
    weight_amount: random_weight_amount,
    price: random_price,
    category: category,
    product_pic: upload_fake_product_pic(category: category),
    outlet_id: user.outlet_id,
    user_id: user.id
  )
end

def random_weight_amount
  rand(100..4000).round(-1)
end

def random_price
  rand(40..300).round(-1)
end

def upload_fake_product_pic(category:)
  uploader = ProductPicUploader.new(Product.new, :product_pic)
  uploader.cache!(File.open(Dir.glob(File.join(Rails.root, 'lib/assets/product_pics', "#{category}_*")).sample))
  uploader
end
