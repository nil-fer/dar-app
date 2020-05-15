FOOD_NAME = {
  "Кулинария": ['Салат с креветками', 'Паста', 'Суп', 'Блинчики', 'Сэндвич', 'Суши'],
  "Бакалея": ['Клубника', 'Бананы', 'Фасоль', 'Морковь', 'Перец',],
  "Вегетарианское": ['Орехи', 'Тыквенный суп'],
  "Сладкое": ['Пончики', 'Торт'],
  "Напитки": ['Йогурт', 'Сок']
}.as_json

def create_products
  6.times do
    Product.categories.each_key do |key|
      create_product('Перекресток', key)
      create_product('Братья Караваевы', key)
      create_product('МакДоналдс', key)
      create_product('Французская пекарня', key)
    end
  end
end

def create_product(company_name, category)
  company = Company.find_by(company_name: company_name)

  Product.create(
    name: FOOD_NAME[category].sample,
    weight_type: 1,
    weight_amount: random_weight_amount,
    price: random_price,
    category: category,
    product_pic: upload_fake_product_pic(category: category),
    outlet_id: company.outlet_ids.first
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
