-- CreateTable
CREATE TABLE "users" (
    "id" TEXT NOT NULL,
    "created_at" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,

    CONSTRAINT "users_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "users_games" (
    "user_id" TEXT NOT NULL,
    "game_id" INTEGER NOT NULL,
    "rating" DECIMAL(3,2),
    "comment" TEXT,
    "is_favourite" BOOLEAN NOT NULL DEFAULT false,
    "is_to_play_later" BOOLEAN NOT NULL DEFAULT false,
    "created_at" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "updated_at" TIMESTAMP(3) NOT NULL,

    CONSTRAINT "users_games_pkey" PRIMARY KEY ("user_id","game_id")
);

-- CreateTable
CREATE TABLE "games" (
    "id" INTEGER NOT NULL,
    "name" TEXT NOT NULL,
    "release_date" DATE,
    "cover_image_id" TEXT,
    "developer_id" INTEGER,

    CONSTRAINT "games_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "genres" (
    "id" INTEGER NOT NULL,
    "name" TEXT NOT NULL,

    CONSTRAINT "genres_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "games_genres" (
    "game_id" INTEGER NOT NULL,
    "genre_id" INTEGER NOT NULL,

    CONSTRAINT "games_genres_pkey" PRIMARY KEY ("game_id","genre_id")
);

-- CreateTable
CREATE TABLE "platforms" (
    "id" INTEGER NOT NULL,
    "name" TEXT NOT NULL,

    CONSTRAINT "platforms_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "games_platforms" (
    "game_id" INTEGER NOT NULL,
    "platform_id" INTEGER NOT NULL,

    CONSTRAINT "games_platforms_pkey" PRIMARY KEY ("game_id","platform_id")
);

-- CreateTable
CREATE TABLE "companies" (
    "id" INTEGER NOT NULL,
    "name" TEXT NOT NULL,

    CONSTRAINT "companies_pkey" PRIMARY KEY ("id")
);

-- CreateIndex
CREATE INDEX "users_games_game_id_idx" ON "users_games"("game_id");

-- CreateIndex
CREATE INDEX "games_developer_id_idx" ON "games"("developer_id");

-- CreateIndex
CREATE INDEX "games_genres_genre_id_idx" ON "games_genres"("genre_id");

-- CreateIndex
CREATE INDEX "games_platforms_platform_id_idx" ON "games_platforms"("platform_id");

-- AddForeignKey
ALTER TABLE "users_games" ADD CONSTRAINT "users_games_user_id_fkey" FOREIGN KEY ("user_id") REFERENCES "users"("id") ON DELETE CASCADE ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "users_games" ADD CONSTRAINT "users_games_game_id_fkey" FOREIGN KEY ("game_id") REFERENCES "games"("id") ON DELETE CASCADE ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "games" ADD CONSTRAINT "games_developer_id_fkey" FOREIGN KEY ("developer_id") REFERENCES "companies"("id") ON DELETE SET NULL ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "games_genres" ADD CONSTRAINT "games_genres_game_id_fkey" FOREIGN KEY ("game_id") REFERENCES "games"("id") ON DELETE CASCADE ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "games_genres" ADD CONSTRAINT "games_genres_genre_id_fkey" FOREIGN KEY ("genre_id") REFERENCES "genres"("id") ON DELETE CASCADE ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "games_platforms" ADD CONSTRAINT "games_platforms_game_id_fkey" FOREIGN KEY ("game_id") REFERENCES "games"("id") ON DELETE CASCADE ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "games_platforms" ADD CONSTRAINT "games_platforms_platform_id_fkey" FOREIGN KEY ("platform_id") REFERENCES "platforms"("id") ON DELETE CASCADE ON UPDATE CASCADE;
