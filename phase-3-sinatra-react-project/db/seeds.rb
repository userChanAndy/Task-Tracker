puts "🌱 Seeding spices..."

# Seed your database here
User.create ([
    {
        username: "andy"
    },
    {
        username: "khi"
    }
])

Task.create([
    {
        task: "go outside",
        user_id: 1,
        complete: "incomplete"
    },
    {
        task: "walk the dog",
        user_id: 2,
        complete: "incomplete"
    }
])

puts "✅ Done seeding!"
